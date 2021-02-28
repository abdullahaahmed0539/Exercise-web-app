import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import EditExercise from './components/edit-exercises.component';
import CreateExercise from './components/createExercise.component';
import CreateUser from './components/user.component';
import exList from './components/exercisesList.component';


function App() {
  return (
    <Router>
       <Navbar/>
       <br/>
       <Route path="/" exact component={exList}/>
       
       <Route path="/edit/:id" component={EditExercise}/>
       
       <Route path="/create" component={CreateExercise}/>
       
       <Route path="/user" component={CreateUser}/>
       
    </Router>
   
  );
}

export default App;
