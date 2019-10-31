import React, { useState, useRef, useEffect } from 'react';
import {
  DrinkCard,
  DrinkPriceText,
  EditForm,
  FormError,
  FormInputDiv,
  FormInput,
  FormBtnGroup,
  FormSubmitBtn
} from './styles';

const DrinkAddForm = ({ addDrink }) => {
  const [errors, setErrors] = useState({});
  const name = useRef('');
  const price = useRef('');
  const description = useRef('');
  useEffect(() => {
    name.current.focus();
  }, [name]);
  const handleAddDrink = e => {
    e.preventDefault();
    setErrors({});
    let hasError = false;
    if (!name.current.value) {
      setErrors(errors => ({ ...errors, name: 'invalid drink name' }));
      hasError = true;
    }
    if (!price.current.value) {
      setErrors(errors => ({ ...errors, price: 'invalid drink price' }));
      hasError = true;
    }
    if (hasError) {
      return;
    }
    addDrink({
      name: name.current.value,
      price: price.current.value,
      description: description.current.value
    });
    name.current.value = '';
    price.current.value = 0;
    description.current.value = '';
  };

  return (
    <DrinkCard>
      <EditForm onSubmit={e => handleAddDrink(e)}>
        <FormInputDiv>
          <FormInput
            type="text"
            ref={name}
            placeholder="Bubble Tea"
            fontWeight="bold"
            fontSize="18px"
          />
          {errors.name && <FormError>{errors.name}</FormError>}
        </FormInputDiv>
        <FormInputDiv>
          <DrinkPriceText>
            NT$
            <FormInput
              type="number"
              ref={price}
              placeholder="65"
              fontWeight={600}
              fontSize="14px"
            />
          </DrinkPriceText>
          {errors.price && <FormError>{errors.price}</FormError>}
        </FormInputDiv>
        <FormInputDiv>
          <FormInput
            type="text"
            ref={description}
            placeholder="It's a famous drink in Taiwan...."
            fontWeight={600}
          />
        </FormInputDiv>
        <FormBtnGroup>
          <FormSubmitBtn type="submit" onClick={e => handleAddDrink(e)}>
            Add Drink
          </FormSubmitBtn>
        </FormBtnGroup>
      </EditForm>
    </DrinkCard>
  );
};

export default DrinkAddForm;
