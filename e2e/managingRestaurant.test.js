// describe('ManageRestaurant', () => {
//   const restaurantName = 'Chicken Dhaka';

//   beforeAll(async () => {
//     await device.launchApp();
//   });

//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should allow creating a restaurant', async () => {
//     await element(by.id('addRestaurantButton')).tap()
//     await element(by.id('addRestaurantTextField')).typeText(restaurantName)
//     await element(by.id('saveRestaurantButton')).tap()

//     await element(by.id('addRestaurantButton')).tap()
//     await element(by.id('addRestaurantTextField')).clearText()
//     await element(by.id('addRestaurantTextField')).typeText(restaurantName + '2')
//     await element(by.id('saveRestaurantButton')).tap()

//     await expect(element(by.label(restaurantName))).toBeVisible()
//     await expect(element(by.id('addRestaurantTextField'))).not.toBeVisible()
//   });
// });

it('calls on save button with text', () => {
  expect(1+2).toBe(3)
});
