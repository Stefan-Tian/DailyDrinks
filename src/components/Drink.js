import React, { useState } from 'react';
import DrinkEditForm from './DrinkEditForm';
import {
  DrinkCard,
  DrinkCardTitle,
  DrinkCardPrice,
  DrinkCardDescription,
  Icon
} from './styles';

const Drink = ({ name, price, description, editDrink, handleDeleteDrink }) => {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? (
    <DrinkEditForm
      name={name}
      price={price}
      editDrink={editDrink}
      description={description}
      closeEdit={() => setIsEdit(false)}
    />
  ) : (
    <DrinkCard>
      <Icon
        className="material-icons"
        right="40px"
        onClick={() => setIsEdit(true)}
      >
        edit
      </Icon>
      <Icon className="material-icons" onClick={handleDeleteDrink}>
        delete
      </Icon>
      <DrinkCardTitle>{name}</DrinkCardTitle>
      <DrinkCardPrice>NT${price}</DrinkCardPrice>
      {description && (
        <DrinkCardDescription>{description}</DrinkCardDescription>
      )}
    </DrinkCard>
  );
};

export default Drink;
