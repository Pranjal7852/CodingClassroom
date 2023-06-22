import React from "react";
import "./Class.css";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/classroom">
          <div className="App">
            <Drawer />
          </div>
        </Route>
        <Route exact path="/classroom/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
