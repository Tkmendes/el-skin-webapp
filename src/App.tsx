import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import Router from './routes'
// import { SearchContext } from './Context/searchContext';
import { CartModalProvider } from './Context/cartModalContext';
import { GlobalStyle } from '../src/Styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './Store';


const AppDiv = styled.div`
  text-align: center;
`

function App() {
  const [search, setSearch] = useState('');

  return (

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppDiv>
          <CartModalProvider>
            {/* <SearchContext value={{ search: search, setSearch: setSearch }}> */}
            <Router />
            {/* </SearchContext> */}
          </CartModalProvider>
        </AppDiv>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
