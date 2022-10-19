import React from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import {PersonCard} from "./components/PersonCard/personCard";

const persons = [
  {id: 1, firstName: "A", lastName: "AA", username: "AAA", password: "AAAA"},
  {id: 2, firstName: "B", lastName: "BB", username: "BBB", password: "BBBB"},
  {id: 3, firstName: "C", lastName: "CC", username: "CCC", password: "CCCC"},
  {id: 4, firstName: "D", lastName: "DD", username: "DDD", password: "DDDD"},
  {id: 5, firstName: "G", lastName: "GG", username: "GGG", password: "GGGG"},
]

const AllCards = () => {
  return (persons.map((item) => {
      <div>
        <h3>{item.username}</h3>
        <label>{item.firstName} {item.lastName}</label>
        <label>{item.id}</label>
      </div>
    }
  ))

}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path=":id" element={<PersonCard persons={persons} />} />
      </Routes>
    </Router>
  );
}

export default App;
