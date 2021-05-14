import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:anime/:id" component={Detail} />
        <Route path="/favorite" component={Favorites} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
