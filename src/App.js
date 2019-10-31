import React from 'react';
import styled from 'styled-components';
import DrinkList from './components/DrinksList';
import GlobalStyles from './styles/globalStyles';

const Container = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <DrinkList />
      </Container>
    </>
  );
};

export default App;
