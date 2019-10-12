import React from 'react';

import NavBar from './components/NavBar';
import Overview from './screens/Overview';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Overview />
    </>
  );
}

export default App;
