import React, { useState } from 'react';
import styled from 'styled-components';

import Router from './routes'
import { SearchContext } from './Context/searchContext';



const AppDiv = styled.div`
  text-align: center;
`

function App() {
  const [search, setSearch] = useState('');

  return (

    <AppDiv>
      <SearchContext value={{ search: search, setSearch: setSearch }}>
        <Router />
      </SearchContext>
    </AppDiv>
    
  );
}

export default App;
