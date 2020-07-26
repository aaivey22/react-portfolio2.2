import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import About from './components/index';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={About}/>
      <Route exact path="/experience" component={Experience}/>

    </>
  );
}

export default App;
