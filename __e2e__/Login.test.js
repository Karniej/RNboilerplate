/* eslint-env detox/detox, mocha */
describe('LoginScreen', () => {
  beforeEach(async () => {
    try {
      await device.reloadReactNative();
    } catch (error) {
      await device.reloadReactNative();
    }
  });
  it('should login ', async () => {
    await waitFor(element(by.id('logIn')))
      .toBeVisible()
      .withTimeout(10000);
    await element(by.id('logIn')).tap();
    await waitFor(element(by.text('Welcome')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('second')).tap();
    await waitFor(element(by.text('Welcome to Second Screen')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('DR')).tap();
    await waitFor(element(by.text('Third')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
