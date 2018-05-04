# RNboilerplate

This is as simple as possible react native boilerplate.<br>
This boilerplate was created to help to kick off my future React Native projects. There are a lot of cool RN kickstarters there, but I want to create as simple as possible.<br>
This Boilerplate contains:<br>

1.  AirBnb ESlint configuration. <br>
2.  Redux state management connected. <br>
3.  React Navigation with simple main Stack Navigator for Login screen and Drawer Navigator.<br>
4.  Hooked up Jest and Enzyme for the best unit testing.<br>
5.  Babel-eslint and Prettier-eslint as dev dependency. <br>
6.  Redux-logger middleware for nice console debugging redux store. <br>
7.  Linked react-native-vector-icons library.<br>

## Usage

### Renaming Project

After cloning this repository I recommend using react-native-rename package - https://www.npmjs.com/package/react-native-rename <br>
Installation:<br>

> yarn global add react-native-rename<br>
> (in the project folder) react-native-rename yourAppName<br>
> For example:<br>
> react-native-rename TravelApp<br>

#### Currently there's some kind of bug in babel-plugin-jest-hoist, that's why I patched this package.<br>
#### Just run "yarn patch-package" before running your tests and everything will run as it should. 

### Future update ideas

I wanted to keep this Boilerplate as simple as possible, but I am stil considering adding a few packages like :<br>
Styled-Components,<br>
Native-Base or Material Design component library,<br>
Some-kind of Onboarding package,<br>
Redux-Form etc...<br>
