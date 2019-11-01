import React, { useReducer } from 'react';
import Drink from './Drink';
import DrinkAddForm from './DrinkAddForm';
import { DrinkListTitle } from './styles';

let initialState = localStorage.getItem('drinks');
if (!initialState) {
  initialState = [
    {
      name: 'Daiquiri',
      price: 200,
      description: 'Extra alcohol'
    },
    {
      name: 'Bloody Margarita',
      price: 250,
      description: "Make sure you're not ordering Bloody Mary"
    }
  ];
} else {
  initialState = JSON.parse(initialState);
}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'add-drink':
      newState = [action.payload, ...state];
      localStorage.setItem('drinks', JSON.stringify(newState));
      return newState;
    case 'edit-drink':
      newState = state.map((drink, index) => {
        if (index !== action.payload.index) {
          return drink;
        }

        return {
          ...drink,
          ...action.payload.drinkInfo
        };
      });
      localStorage.setItem('drinks', JSON.stringify(newState));
      return newState;
    case 'delete-drink':
      newState = state.filter((drink, index) => index !== action.payload);
      localStorage.setItem('drinks', JSON.stringify(newState));
      return newState;
    default:
      throw new Error('no such action type!');
  }
};

const DrinksList = () => {
  const [drinks, dispatch] = useReducer(reducer, initialState);
  const addDrink = drinkInfo =>
    dispatch({ type: 'add-drink', payload: drinkInfo });

  const editDrink = index => drinkInfo =>
    dispatch({ type: 'edit-drink', payload: { index, drinkInfo } });

  const deleteDrink = index =>
    dispatch({ type: 'delete-drink', payload: index });

  return (
    <div>
      <DrinkListTitle>DailyDrinks</DrinkListTitle>
      <DrinkAddForm addDrink={addDrink} />
      {drinks.map((drink, index) => (
        <Drink
          key={drink.name}
          {...drink}
          editDrink={editDrink(index)}
          handleDeleteDrink={() => deleteDrink(index)}
        />
      ))}
    </div>
  );
};

export default DrinksList;
