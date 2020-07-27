import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import About from './components/index';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
        <CssBaseline />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/portfolio" component={Portfolio}/>

            </Switch>
          </BrowserRouter>    
    </>
  );
}

export default App;
