# RNboilerplate

This is as simple as possible react native boilerplate.<br>
This boilerplate was created to help to kick off my future React Native projects. There are a lot of cool RN kickstarters there, but I want to create as simple as possible.<br>
This Boilerplate contains:<br>

1. Flow and AirBnb ESlint configuration, also with flow-typed for npm packages. (flow-bin 0.53.1)<br>
2. Redux state management connected. <br>
3. React Navigation with simple main Stack Navigator for Login screen and Drawer Navigator.<br>
4. Hooked up Jest for testing - I have to yet configurate some boilerplate tests.<br>
5. Babel-esling and Prettier-eslint as dev dependency. <br>
6. Redux-logger middleware for nice console debugging redux store. <br>
7. Added Jest and Detox for Unit/E2E testing.<br>

After cloning this repository I recommend using react-native-rename package - https://www.npmjs.com/package/react-native-rename <br>
Installation:<br>
yarn global add react-native-rename<br>
(in the project folder) react-native-rename yourAppName<br>

Example<br>
react-native-rename TravelApp<br>

I wanted to keep this Boilerplate as simple as possible, but I am stil considering adding a few packages like :<br>
CodePush,<br>
Styled-Components,<br>
Native-Base or Material Design component library,<br>
Some-kind of Onboarding package,<br>
Redux-Form etc...<br>
