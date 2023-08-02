# Answering questions on the Wiki:
### If time wasn't a constraint what else would you have done?

- To understand more about the React MUI library

### How was this test overall? I.e too hard, too easy, how long it took, etc
- For me its easy, it took me half a day to implement the Requirements needed for the test
- The only challenge for me is the usage of the React MUI library, as i need to understand how theming works here, how the 
styles and components are implemented

### How close to the designs is your submission?
- Probably i would say 85-90%

### If you needed to change something in the future (size/color of buttons), how easy would it be?
- It would be pretty easy, as we just need to adjust it in our `theme` object

### How does this look on different devices?
- Added responsiveness on this to display properly on small resolutions
- Added the `<CSSBaseline>` which is to normalize the styles across other browsers

### What if a customer has thousands of records?
- Then we need to update the backend API to support pagination and implement the pagination

### How is state managed as the codebase grows?
- Currently we use context for this, which is alright based on the requirements and size of the app,
but we need to use a global state management here like `redux` or `zustand` in the future if the codebase
grows and there's alot of data accessing between siblings.

### How can we support multiple countries?
- We use `react-intl` library to handle different languages on our text

### How can you ensure the app behaves as you intend it to?
- We add unit test and component test

### How intuitive is the behavior of the app?
- I've added some UX on this:
  - on creating new client, we show a snackbar telling users that its a success operation
  - if the required field is not inputted, we display a proper error message on the UI
  - in searching, we see the results in real-time. Though if the API is properly implemented,
  then we move the searching logic to the backend and add a loading state while searching
  - if there's an error in the API when we create a client, we catch the error

## Added Libraries
- Added `uuid` library to generate the ID of the client to be sent to the API
- Added `react-hook-form` to handle the input form validation
- Added `prettier` for code formatter