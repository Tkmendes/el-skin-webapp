import React from 'react';
import HeaderComponents from './Componentes/Header/headerComponents';
import styled from 'styled-components';



const AppDiv = styled.div`
  text-align: center;
`

function App() {
  return (

    
    <AppDiv>
      <HeaderComponents/>
    </AppDiv>
  );
}

export default App;
