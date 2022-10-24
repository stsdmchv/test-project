import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PersonCard} from "./components/PersonCard/personCard.tsx";
import {AllCards} from "./components/Home/AllCards.tsx";
import {AddPerson} from "./components/PersonCard/CreateCard/addPerson.tsx";

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
