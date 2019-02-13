import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

import Nav from './components/layout/Nav';
import Index from './components/layout/Index';
import Gif from './components/trending/Gif';

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Nav />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/gif/gifs/:id' component={Gif} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
