import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import Router from './routes'
import { SearchContext } from './Context/searchContext';
import { CartModalProvider } from './Context/cartModalContext';
import { GlobalStyle } from '../src/Styles/GlobalStyles';


const AppDiv = styled.div`
  text-align: center;
`

function App() {
  const [search, setSearch] = useState('');

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppDiv>
        <CartModalProvider>
          <SearchContext value={{ search: search, setSearch: setSearch }}>
            <Router />
          </SearchContext>
        </CartModalProvider>
      </AppDiv>
    </ThemeProvider>

  );
}

export default App;
