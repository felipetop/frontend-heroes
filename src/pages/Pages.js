import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from './Index.js';
import Hero from './Hero.js';
import NoMatch from './404';

function Pages(props) {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact render={() => <Index/> } />
          <Route path="/hero/:heroId" exact render={() => <Hero/> } />
          <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
  
export default Pages;
  