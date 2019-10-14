import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ViewDictionaries from './screens/ViewDictionaries/provider';
import ManageDictionaries from './screens/ManageDictionaries/provider';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/dictionaries' component={ViewDictionaries} />
          <Route path='/admin' component={ManageDictionaries} />
        </div>
      </Router>
    </>
  );
}

export default App;
