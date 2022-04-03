# Chapter 6. 다이어리 앱 만들기 1

Chapter 6에서는 앞서 배운 navigation, tab등을 활용하여 다이어리 앱을 만들어 본다.
* navigation, stack, tab의 실제 활용
* Context API
* Render Props
* useRef
-----
## 필요한 라이브러리

Chapter 6에서는 다음 라이브러리가 필요하다.
* @react-navigation/native
* @react-navigation/native-stack
* @react-navigation/bottom-tabs
* react-native-screens
* react-native-safe-area-context
* react-native-vector-icons
* uuid
* react-native-get-random-values

```shell
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-vector-icons
yarn add uuid
```
-----
## 다이어리 앱 화면 설계

다이어리 앱의 화면 설계는 다음과 같다.
```
RootStack // 스택네비게이션
|- MainTab // 하단텝 네비게이션 
|    |-FeedsScreen // 작성 글 목록을 보여주는 화면
|    |-CalendarScreen // 달력으로 글 조회
|    |-SearchScreen // 글 검색 
|-WhiteScreen // 글 작성 화면
```
`WhiteScreen`이 나타날때는 하단 텝이 가려지도록 스택 네비게이션에 추가한다.

## RootStack과 MainTab
### RootStack
```javascript
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
```
### MainTab
MainTab의 헤더를 가리지 않으면 MainTab의 헤더가 이중으로 보인다.
```javascript
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WhiteScreen from './WhiteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}} // true로 하면 헤더가 이중으로 보인다.
      />
      <Stack.Screen name="White" component={WhiteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;

```
----
## Render Props 패턴
* 컴포넌트에 렌더링할 함수를 전달하는 패턴
* `children` Props를 통해 컴포넌트 하위 컴포넌트를 가져올 수 있다.
    ```js
    function FeedsScreen() {
    return (
        <View style={style.block}>
        <Box>
            <Text>23333333333</Text> // < 이 부분이 함수가 될 수 있다.
        </Box>
        <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
        </View>
    );
    }

    function Box({children}) {
    return <View style={style.box}>{children}</View>;
    }
    ```
* `Render Props`는 `children`의 타입을 함수 형태로 받아오는 패턴이다.
* Render Props를 사용하면 사용할 컴포넌트에서 특정 값을 밖으로 빼내와 사용 할 수 있다.
    ```js
    function FeedsScreen() {
    return (
        <View style={style.block}>
        <Box>
        {(value) => <Text>{value}</Text>}
        </Box>
        <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
        </View>
    );
    }

    function Box({children}) {
        return <View style={style.box}>{children('hello world!')}</View>;
    }
    ```
* *Render Props가 가능한 이유?*
    * Component 는 함수로 정의 될 수 있다.
    * children props로 하위 컴포넌트를 가져올 수 있다.
    * children props에 함수를 지정 할 수 있다.
---
## Context API 사용하기
* Context API는 React에 내장된 기능으로 Props를 사용하지 않아도 특정 값이 필요한 컴포넌트 끼리 쉽게 값을 공유할 수 있게 해준다.
* 전역 상태 관리에 많이 사용된다.
* render props 패턴 사용
* useConext Hook 사용
### Context 생성하기
* createContext 함수를 이용해 생성
* Provider, Consumer 컴포넌트가 생성됨.
* Provider는 Context안에 있는 값을을 사용할 컴포넌트를 감싸주는 용도로 사용됨.
### Context API 예시 (Render Props 사용)
#### 예) LogContext
```js
import {createContext} from 'react';

const LogContext = createContext('안녕하세요~~');

export default LogContext;

```
#### 예) App (Provider)
Context Provider컴포넌트에는 value props를 지정할 수 있고 하위 컴포넌트에서 이 값을 공유 할 수 있음.
```js
function App() {
  return (
    <NavigationContainer>
      <LogContext.Provider value="안녕하세요">
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
}
```
#### 예) FeedsScreen (Consumer)
Context Cunsumer에서 Provider에서 지정한 값을 사용할 수 있음.
render props 패턴 사용
```js
function FeedsScreen() {
  return (
    <View style={style.block}>
      <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    </View>
  );
}
```
### Context API 예시 (useContext Hook 사용)
* render props는 hooks가 없던 시절 사용하였음.
* 최근 hooks의 등장으로 useContext hook으로 context api를 사용함.
* Consumer를 사용할 필요가 없어짐.
```js
function FeedsScreen() {
  const value = useContext(LogContext);
  return (
    <View style={style.block}>
      <Text>{value}</Text>
    </View>
  );
```

### Context 에서 유동적인 값 다루기
* useState를 사용해 관리하는 상태를 Provider로 넣어주면 useContext를 사용하는 컴포넌트쪽에서 렌더링이 발생한다.
* Provider전용 컴포넌트를 만들어 유지보수성을 높일 수 있다.
    ```js
    export function LogContextProvider({children}) {
    const [text, setText] = useState('');
    return (
        <LogContext.Provider value={{text, setText}}>
        {children}
        </LogContext.Provider>
    );
    }
    export default LogContext;

    ```
#### 예) FeedScreen
```js
function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={style.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요"
        style={style.input}
      />
    </View>
  );
}

```
#### 예) CalendarScreen
```js
function CalendarScreen() {
  const {text} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text>{text}</Text>
    </View>
  );
}
```
-----
## 새 글 작성하기 구현

### FloatingWriteButton
* FeedsScreen에서 우측 모서리에 나타나는 떠있는 버튼 구현
* `posision: 'absolute'`스타일을 이용하여 절대좌표 지정
* `Pressable` 컴포넌트 이용(v0.63)
* 터치 시 `WriteScreen` navigate

###  WriteScreen UI 구현
#### WriteHeader
#### WriteEditor
* `useRef`
    * 컴포넌트의 레퍼런스를 선택할 수 있게 하는 Hook
    * 제목을 입력하고 enter를 누르면 내용으로 포커스를 이동시켜야함
    * TextInput의 레퍼런스
        * `.focus()`: TextInput에 포커스를 잡아줌.
        * `.blur()`: TextInput에 포커스 해제
        * `.clear()`: TextInput에 포커스를 모두 비움.
    ```js
    <TextInput
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeTitle={onChangeTitle}
        value={title}
        style={styles.titleInput}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해 보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    ```
* 