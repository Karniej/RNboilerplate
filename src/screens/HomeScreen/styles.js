import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'none',
  },
  subContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
export default styles;
