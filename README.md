This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

- When first entering the homepage, you'll see a list of drinks and a form to create new orders.
- Drink-name and drink-price fields are mandatory, if not specified, the form will show errors below the fields.
- The note(description) field is optional.
- Each order is editable and deletable, simply click the top right buttons of the card. (Originally, I used material-design-icons for edit and delete icons. But somehow codeSandbox can't seem do download this dependency.)

## Code

### DrinksList Component

- I use useReducer instead of useState to manage drinks list data so that actions to change the data can be more predictable since they're pre-defined.
- I use localStorage to store data and update them in the reducer. However, when working with databases, I won't put API calls in reducers, since to my understanding, reducer should not make side-effects, meaning that it should always return the same output if the input hasn't changed.

### DrinkAddForm and DrinkEditForm

- I normally use **Formik** for handling forms and **Yup** for input validation. But since it's a small project, I decide to implement it myself.
- I use useRef instead of useState to manage input data because when using refs, changing the input won't cause re-renders.

### Styles

- I put all drinks-related styles in the same file called `styles.js`.
- If the project gets bigger, I tend to group components and styles by category. In this case, put all drinks-related components and styles into a folder in `/components/drinks`.
