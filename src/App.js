import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={userCards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
