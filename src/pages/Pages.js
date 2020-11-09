import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from './Index.js';
import NoMatch from './404';

class Pages extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <Index/> } />
            <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}
  
export default Pages;
  