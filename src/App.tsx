import React from 'react';

import NavBar from './components/NavBar';
import ManageDictionaries from './screens/ManageDictionaries/provider';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <ManageDictionaries />
    </>
  );
}

export default App;
