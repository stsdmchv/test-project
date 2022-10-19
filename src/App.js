import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PersonCard} from "./components/PersonCard/personCard";
import {AllCards} from "./components/Home/allCards";
import {AddPerson} from "./components/PersonCard/addPerson";

const persons = [
  {id: 1, firstName: "A", lastName: "AA", username: "AAA", password: "AAAA"},
  {id: 2, firstName: "B", lastName: "BB", username: "BBB", password: "BBBB"},
  {id: 3, firstName: "C", lastName: "CC", username: "CCC", password: "CCCC"},
  {id: 4, firstName: "D", lastName: "DD", username: "DDD", password: "DDDD"},
  {id: 5, firstName: "G", lastName: "GG", username: "GGG", password: "GGGG"},
]

const Header = () => <h1>User cards</h1>

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<AllCards persons={persons} />} exact />
          <Route path="/addNewUser" element={<AddPerson />} exact />
          <Route path=":id" element={<PersonCard persons={persons} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
