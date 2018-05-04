# RNboilerplate

This is as simple as possible react native boilerplate.<br>
This boilerplate was created to help to kick off my future React Native projects. There are a lot of cool RN kickstarters there, but I want to create as simple as possible.<br>
This Boilerplate contains:<br>

1.  AirBnb ESlint configuration. <br>
2.  Redux state management connected. <br>
3.  React Navigation with simple main Stack Navigator for Login screen and Drawer Navigator.<br>
4.  Hooked up Jest for unit testing.<br>
5.  Babel-eslint and Prettier-eslint as dev dependency. <br>
6.  Redux-logger middleware for nice console debugging redux store. <br>
7.  Added Detox for E2E testing.<br>

## Usage

### Renaming Project

After cloning this repository I recommend using react-native-rename package - https://www.npmjs.com/package/react-native-rename <br>
Installation:<br>

> yarn global add react-native-rename<br>
> (in the project folder) react-native-rename yourAppName<br>
> For example:<br>
> react-native-rename TravelApp<br>

### Detox Tests

In order to make Detox Tests working you have to go to <br>
/../android/app/src/androidTest/java/com/boilerplate/DetoxTest.java and change the<br>
package com.boilerplate to package com.yourappname<br>
Also you'll need to install applesimutils from here:<br>

> https://github.com/wix/AppleSimulatorUtils<br>
> brew tap wix/brew<br>
> brew install wix/brew/applesimutils<br>

I wanted to keep this Boilerplate as simple as possible, but I am stil considering adding a few packages like :<br>
Styled-Components,<br>
Native-Base or Material Design component library,<br>
Some-kind of Onboarding package,<br>
Redux-Form etc...<br>
