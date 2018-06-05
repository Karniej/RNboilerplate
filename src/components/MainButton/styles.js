import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = {
  container: {
    borderRadius: 3,
    padding: constants.defaultMargin,
    backgroundColor: colors.accentColor,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.secondaryColor
  },
  textStyle: {
    fontSize: 18,
    color: colors.secondaryColor
  }
}
export default styles
