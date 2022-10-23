import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PersonCard} from "./components/PersonCard/personCard";
import {AllCards} from "./components/Home/AllCards";
import {AddPerson} from "./components/PersonCard/CreateCard/addPerson";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AllCards />} exact />
          <Route path="/addNewUser" element={<AddPerson />} />
          <Route path=":id" element={<PersonCard />} />
        </Routes>
      </Router>
  );
}

export default App;
