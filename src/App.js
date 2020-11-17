import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./containers/List";
import Detail from "./containers/Detail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} exact component={List} />
          <Route path={"/character/:character"} exact component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
