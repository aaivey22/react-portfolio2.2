import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import About from './components/index';
import Experience from './components/Experience';

function App() {
  return (
    <>
        <CssBaseline />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/experience" component={Experience}/>
            </Switch>
          </BrowserRouter>    
    </>
  );
}

export default App;
