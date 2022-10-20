import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PersonCard} from "./components/PersonCard/personCard";
import {AllCards} from "./components/Home/allCards";
import {AddPerson} from "./components/PersonCard/CreateCard/addPerson";
import {Header} from "./components/Home/Header"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AllCards />} exact />
          <Route path="/addNewUser" element={<AddPerson />} />
          <Route path=":id" element={<PersonCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
