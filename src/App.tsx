import React, { useState } from 'react';
import styled from 'styled-components';

import Router from './routes'
import { SearchContext } from './Context/searchContext';
import { CartModalProvider } from './Context/cartModalContext';



const AppDiv = styled.div`
  text-align: center;
`

function App() {
  const [search, setSearch] = useState('');

  return (

    <AppDiv>
      <CartModalProvider>
        <SearchContext value={{ search: search, setSearch: setSearch }}>
          <Router />
        </SearchContext>
      </CartModalProvider>
    </AppDiv>

  );
}

export default App;
