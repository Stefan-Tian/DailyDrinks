import React, { useReducer } from 'react';
import Drink from './Drink';
import DrinkAddForm from './DrinkAddForm';
import { DrinkListTitle } from './styles';

const initialState = [
  {
    name: 'Daiquiri',
    price: 200,
    description:
      'The original daiquiri is an extremely simple recipe that requires just three common ingredients. It is also one of the freshest drinks you can make and an essential rum cocktail everyone should know and taste.'
  },
  {
    name: 'Bloody Margarita',
    price: 250,
    description:
      "When you see 'bloody' in a drink's name you'll likely think of a tomato juice cocktail like the Bloody Mary. That is definitely not the case for this bloody margarita. Instead, it is a blood orange margarita that features the wonderful flavor of a blood red citrus fruit."
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-drink':
      return [action.payload, ...state];
    case 'edit-drink':
      return state.map((drink, index) => {
        if (index !== action.payload.index) {
          return drink;
        }

        return {
          ...drink,
          ...action.payload.drinkInfo
        };
      });
    case 'delete-drink':
      return state.filter((drink, index) => index !== action.payload);
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
