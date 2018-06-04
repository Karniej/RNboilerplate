import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = {
  container: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.accentColor,
    padding: constants.defaultMargin
  },
  textStyle: {
    fontSize: 18,
    color: colors.accentColor
  }
}
export default styles
