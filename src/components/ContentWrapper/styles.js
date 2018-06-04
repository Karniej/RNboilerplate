import { colors } from '../../config'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    paddingTop: 250
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20
  },
  modalButtons: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}
export default styles
