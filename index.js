import { AppRegistry, YellowBox } from 'react-native';
import Root from './src/Root';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('Boilerplate', () => Root);
