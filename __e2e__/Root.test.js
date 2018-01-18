describe('Root', () => {
  beforeEach(async () => {
    try {
      await device.reloadReactNative();
    } catch (error) {}
  });
  // it('should have welcome heading', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });
  // it('Push Notification permission is granted', async () => {
  //   await device.launchApp({ permissions: { notifications: 'YES' } });
  // });
  it('AppFlow correct', async () => {
    // await device.launchApp({ permissions: { location: 'inuse' } });
    await waitFor(element(by.id('logIn')))
      .toBeVisible()
      .withTimeout(10000);
    await element(by.id('logIn')).tap();
    await element(by.id('DR')).tap();
    await element(by.text('Third')).tap();
    await element(by.id('logout')).tap();
  });
});
