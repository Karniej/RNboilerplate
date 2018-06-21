import { colors } from '../../config'

const styles = {
  singleItemStyles: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: colors.accentColor,
    width: '100%'
  },
  singleItemImageStyle: {
    width: 80,
    height: 80
  },
  singleItemTextContainer: {
    flexDirection: 'column'
  },
  singleItemTextTitle: {
    width: '80%',
    paddingRight: 15,
    fontWeight: '600',
    color: colors.secondaryColor
  }
}
export default styles
