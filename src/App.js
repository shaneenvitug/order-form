import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OrderStatus from './OrderStatus';
import OrderForm from './OrderForm';

function App() {
  return (
    <Switch>
      <Route path='/' component={OrderForm} exact />
      <Route path='/porksinigang' component={OrderStatus} />
    </Switch>
  );
}

export default App;