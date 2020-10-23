import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from '../components/NotFound';
import Home from '../pages/Home';
import ListStudents from '../pages/ListStudents';
import NewStudent from '../pages/NewStudent';

const App = () => (
  <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/students' component={ListStudents} />
        <Route exact path='/students/new' component={NewStudent} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default App;