# FoodDelivery

## Instruction to Run App on Simulator/Emulator

1. Install npm dependencies by running `$ yarn` command.

### iOS
1. Install iOS dependencies by running `$ npx pod-install` command.
1. Run `$ yarn ios` command to run the app on iPhone 14 Pro Max simulator. You can edit ios script on package.json file to run the app another iPhone model.

### Android
1. To run the app on android you need to generate a Google Maps API key. Check out this link: https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md#specify-your-google-maps-api-key
1. Run `$ yarn android` command to run the app on an Android emulator.