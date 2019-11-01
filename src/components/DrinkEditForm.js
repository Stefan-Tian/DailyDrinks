import React, { useRef, useEffect } from 'react';
import {
  DrinkCard,
  DrinkPriceText,
  EditForm,
  FormInputDiv,
  FormInput,
  Icon,
  FormSubmitBtn,
  FormSecondaryBtn,
  FormBtnGroup
} from './styles';

const DrinkEditForm = ({ name, price, description, closeEdit, editDrink }) => {
  const editName = useRef(name);
  const editPrice = useRef(price);
  const editDescription = useRef(description);

  const handleEditDrink = e => {
    e.preventDefault();
    // if the user empty the required field, set it back to initial value
    if (!editName.current.value) {
      editName.current.value = name;
    }
    if (!editPrice.current.value) {
      editPrice.current.value = price;
    }
    if (!editDescription.current.value) {
      editDescription.current.value = description;
    }

    editDrink({
      name: editName.current.value,
      price: editPrice.current.value,
      description: editDescription.current.value
    });

    closeEdit();

    editName.current.value = '';
    editPrice.current.value = 0;
    editDescription.current.value = '';
  };

  useEffect(() => {
    editName.current.focus();
  }, [editName]);

  return (
    <DrinkCard>
      <EditForm onSubmit={e => handleEditDrink(e)}>
        <Icon className="material-icons" onClick={closeEdit}>
          close
        </Icon>
        <FormInputDiv>
          <FormInput
            type="text"
            ref={editName}
            defaultValue={editName.current}
            fontWeight="bold"
            fontSize="18px"
          />
        </FormInputDiv>
        <FormInputDiv>
          <DrinkPriceText>
            NT$
            <FormInput
              type="number"
              ref={editPrice}
              placeholder={price}
              fontWeight={600}
              fontSize="14px"
            />
          </DrinkPriceText>
        </FormInputDiv>
        <FormInputDiv>
          <FormInput
            type="text"
            ref={editDescription}
            defaultValue={editDescription.current}
            placeholder="extra note for your order..."
            fontWeight={600}
          />
        </FormInputDiv>
        <FormBtnGroup>
          <FormSecondaryBtn type="button" onClick={closeEdit}>
            Cancel
          </FormSecondaryBtn>
          <FormSubmitBtn type="submit" onClick={e => handleEditDrink(e)}>
            Confirm
          </FormSubmitBtn>
        </FormBtnGroup>
      </EditForm>
    </DrinkCard>
  );
};

export default DrinkEditForm;
