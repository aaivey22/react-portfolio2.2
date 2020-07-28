import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './components/index';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
        <CssBaseline />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
          </BrowserRouter>    
    </>
  );
}

export default App;
