/* eslint-env detox/detox, jest */
// beforeEach(async () => {
//   await device.reloadReactNative()
// })

describe('Go through the app', () => {
  it('should Go to the Second Screen ', async () => {
    await expect(element(by.text('Log In'))).toBeVisible()
    await element(by.text('Log In')).tap()
    await expect(element(by.text('Second Screen'))).toBeVisible()
    await element(by.text('Second Screen')).tap()
  })
  it('should tap on a filter', async () => {
    await expect(element(by.text('Filter Label'))).toBeVisible()
    await element(by.text('Filter Label')).tap()
  })
  it('Should choose an option from filter', async () => {
    await element(by.text('Tomato')).tap()
  })
  it('Should Go to the Third Screen', async () => {
    await element(by.text('Third Screen')).tap()
  })
  it('Should Log out and go to the Log In screen', async () => {
    await element(by.text('Log Out')).tap()
  })
})

describe('Login credentials', () => {
  it('Should write the Login in the text Input', async () => {
    await expect(element(by.text('Log In'))).toBeVisible()
    await element(by.id('Login')).clearText()
    await element(by.id('Login')).typeText('Admin')
  })
  it('Should write the Password in the text Input', async () => {
    await element(by.id('Password')).clearText()
    await element(by.id('Password')).typeText('password')
  })
  it('Should tap on the login button and log in to the app', async () => {
    await element(by.text('Log In')).tap()
    await expect(element(by.text('React Native Boilerplate'))).toBeVisible()
  })
})
