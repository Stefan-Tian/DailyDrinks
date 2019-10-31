import styled from 'styled-components';

const bluePrimary = 'hsl(207, 100%, 35%)';
const blueSecondary = 'hsl(200, 80%, 30%)';
const blueGrey = 'hsl(200, 30%, 40%)';
const blueLightGrey = 'hsla(200, 30%, 50%, 0.4)';
const grey = 'hsl(200, 0%, 35%)';
const lightGrey = 'hsl(200, 0%, 55%)';
const redError = 'hsl(5, 70%, 50%)';
const shadow =
  ' 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 -6px 16px -6px rgba(0, 0, 0, 0.025)';
const shadowDark =
  '0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.24), 0 -6px 16px -6px rgba(0, 0, 0, 0.025)';

export const DrinkListTitle = styled.h1`
  color: ${bluePrimary};
  margin-bottom: 24px;
  text-align: center;
`;

export const DrinkCard = styled.div`
  background-color: #fff;
  position: relative;
  box-shadow: ${shadow};
  padding: 20px 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  transition: all 0.5s;

  &:hover {
    box-shadow: ${shadowDark};
  }
`;

export const DrinkCardTitle = styled.h3`
  color: ${blueSecondary};
  margin-bottom: 8px;
`;

export const DrinkCardPrice = styled.h5`
  color: ${blueGrey};
  margin-bottom: 10px;
`;

export const DrinkCardDescription = styled.p`
  color: ${grey};
  max-height: 100px;
  overflow: scroll;
`;

export const Icon = styled.i`
  font-size: 16px;
  color: ${lightGrey};
  position: absolute;
  cursor: pointer;

  top: ${({ top }) => (top ? top : '20px')};
  right: ${({ right }) => (right ? right : '15px')};

  &:hover {
    color: ${blueGrey};
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormError = styled.div`
  color: ${redError};
`;

export const FormInputDiv = styled.div`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  border: 0;
  width: 90%;

  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};

  &:focus {
    outline: 0;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: ${lightGrey};
  }
`;

export const DrinkPriceText = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: ${lightGrey};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:focus {
    outline: 0;
  }
`;

export const FormBtnGroup = styled.div`
  align-self: center;
`;

export const FormSubmitBtn = styled(Button)`
  padding: 8px 12px;
  background-color: ${blueSecondary};
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: ${blueGrey};
  }
`;

export const FormSecondaryBtn = styled(Button)`
  font-style: italic;
  color: ${blueSecondary};
  border-bottom: 3px solid ${blueLightGrey};
  padding: 0;
  line-height: 10px;
  margin-right: 30px;
`;
