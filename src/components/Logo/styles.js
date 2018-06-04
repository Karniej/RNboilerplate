import { Platform } from 'react-native'
import { constants } from '../../config'

const styles = {
  container: {
    width: Platform.select({ ios: 35, android: 40 }),
    height: Platform.select({ ios: 35, android: 40 }),
    borderRadius: 3,
    marginRight: constants.defaultMargin,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginBottom: constants.defaultMargin
  },
  logo: {
    width: '100%',
    height: '100%'
  }
}
export default styles
