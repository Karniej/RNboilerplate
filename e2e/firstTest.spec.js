/* eslint-env detox/detox, jest */

describe('Example', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative()
  // })

  it('should Go to the Second Screen ', async () => {
    await expect(element(by.text('Log In'))).toBeVisible()
    await element(by.text('Log In')).tap()
    await expect(element(by.text('Second Screen'))).toBeVisible()
    await element(by.text('Second Screen')).tap()
    await expect(element(by.text('HEADLINE'))).toBeVisible()
  })

  it('should tap on a filter', async () => {
    await expect(element(by.text('Filter Label'))).toBeVisible()
    await element(by.text('Filter Label')).tap()
  })
  it('Should choose an option from filter', async () => {
    await element(by.text('Tomato')).tap()
  })
  it('Should choose an option from filter', async () => {
    await element(by.text('Tomato')).toBeVisible()
  })
})
