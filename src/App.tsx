import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import ViewDictionaries from './screens/ViewDictionaries/provider';
import ManageDictionaries from './screens/ManageDictionaries/provider';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/dictionaries' component={ViewDictionaries} />
          <Route path='/admin' component={ManageDictionaries} />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
