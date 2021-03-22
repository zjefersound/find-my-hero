import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Questions from '../pages/Questions';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/questions' exact component={Questions}/>
        <Route path='/list' exact component={List}/>
      </Switch>
    </Router>
  );
}

export default Routes;