# Chapter 6. 다이어리 앱 만들기 1

Chapter 6에서는 앞서 배운 navigation, tab등을 활용하여 다이어리 앱을 만들어 본다.

## 필요한 라이브러리

Chapter 6에서는 다음 라이브러리가 필요하다.
* @react-navigation/native
* @react-navigation/native-stack
* @react-navigation/bottom-tabs
* react-native-screens
* react-native-safe-area-context
* react-native-vector-icons

```shell
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-vector-icons
```

## 다이어리 앱 화면 설계

다이어리 앱의 화면 설계는 다음과 같다.
```
RootStack
|- MainTab
|    |-FeedsScreen
|    |-CalendarScreen
|    |-SearchScreen
|-WhiteScreen
```