import React from 'react';
import Main from './Main';
import styled from 'styled-components'

const AppContainer = styled.div`
  background-color: #fcd579;
  height: 100vh;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}

export default App;
