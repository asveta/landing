import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './pages/Home';
import TutorsPage from './pages/Tutors';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';

function App() {
  const analytics = firebase.analytics();
  return (
    <Router>
      <Switch>
        <Route path='/tutors'>
          <TutorsPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
