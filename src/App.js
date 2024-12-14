import React from 'react';
import Header from './components/header/header';
import Fon from './components/fon/fon';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Fon />
    </div>
  );
}

export default App;