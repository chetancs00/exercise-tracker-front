import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";
import Navbar from './Components/navbar.component';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;