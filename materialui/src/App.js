import React from 'react';
import {NavBar} from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <main >
    <Switch>
      <Route exact path = "/"> <h1>Home</h1></Route>
      <Route exact path = "/Profile"> <h1>Profile</h1></Route>
      <Route exact path = "/Blogs"> <h1>Blogs</h1></Route>
    </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
