import React from "react";
import HomePage from "./pages/Home";
import TutorsPage from "./pages/Tutors";
import HomeworkPage from "./pages/Students/Homework";
import AdultsPage from "./pages/Students/Adults";
import SchoolPage from "./pages/Students/School";
import StudentsIndexPage from "./pages/Students/StudentsIndex";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/students/homework">
          <HomeworkPage />
        </Route>
        <Route path="/students/adults">
          <AdultsPage />
        </Route>
        <Route path="/students/school">
          <SchoolPage />
        </Route>
        <Route path="/students">
          <StudentsIndexPage />
        </Route>
        <Route path="/tutors">
          <TutorsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
