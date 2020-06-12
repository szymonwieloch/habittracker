import React from "react";
import Home from "./Home";
import Habits from "./Habits";
import AddHabit from "./AddHabit";
import Login from "./Login";
import { useStyles } from "./Menu";
import { Menu } from "./Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  let classes = useStyles();

  return (
    <Router>
      <Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addhabit" component={AddHabit} />
          <Route exact path="/habits" component={Habits} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Menu>
    </Router>
  );
};

export default App;
