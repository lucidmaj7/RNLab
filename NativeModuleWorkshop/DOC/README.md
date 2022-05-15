# 10. 네이티브 모듈 만들기
## 개요
* IOS/Android 네이티브 코드를 ReactNative의 JAVASCRIPT에서 불러 사용하는 방법을 배운다.

## 필요성
* 리엑트 네이티브에서 자체적으로 지원하지 않는 기능을 네이티브 모듈로 구현하여 사용 할 수 있다.
* 그 예시로 많은 서드파티 라이브러리들이 이러한 네이티브 모듈을 사용하고 있다.(react-native-image-picker)

## 제약사항
* 자바, 코틀린, Objective-C, Swift와 같은 언어를 사용할 줄 알아야함.

## 네이티브 모듈 사용 요약(ANDROID)
1. 네이티브 코드 구현
    * Android의 경우 JAVA클래스 구현
2. 패키지 작성하기
3. 패키지 등록하기
4. 자바스크립트에서 네이티브 모듈 사용하기

## Android에서 JAVA 네이티브 모듈 만들기
### 네이티브 모듈 작성
* 앱 기본 패키지에 JAVA클래스 추가
* `ReactContextBaseJavaModule` 클래스를 상속받음.
* `getName`함수 override
    * JAVASCRIPT에서 불러서 사용할 네이티브 모듈이름을 정함   
* 메소드 작성
    * `@ReactMethod` 데코레이터를 추가하고 메소드를 작성함.
```JAVA
package com.nativemoduleworkshop;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;


import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {
    ToastModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void show(String message, int duration) {
        ReactApplicationContext context = getReactApplicationContext();
        Toast toast = Toast.makeText(context, message, duration);
        toast.show();
    }


    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        constants.put("VERSION", "1.0.0.1");
        return constants;
    }
}
```
* 상수 내보네기
    * `getConstants` 메소드를 override하여 상수를 정의할 수 있음.

### 패키지 작성하기
* 리엑트 네이티브 프로젝트에서 사용하려면 패키지를 만들어 등록해야함.
* 패키지 클래스를 생성함.
* `createNativeModules`, `createViewManagers`메소드를 Override함
    * `createNativeModules`: UI컴포넌트를 만들어 사용할 때 사용
    * `createNativeModules`: 만든 모듈리스트를 생성하고 모듈 리스트를 반환함.
```JAVA
package com.nativemoduleworkshop;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ToastPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```

### 패키지 등록
* 만든 패키지를 `MainApplication`에 등록해야함
```JAVA
 @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();

            packages.add( new ToastPackage());

          return packages;
        }
```

### JAVASCRIPT에서 모듈 사용하기
```js
import {NativeModules} from 'react-native';
const ToastModule = NativeModules.ToastModule;
export default ToastModule;
```
```js
   const onPress = () => {
     console.log( ToastModule) ;
     ToastModule.show('Hello~~',ToastModule.SHORT);
   };
```