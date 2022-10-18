import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserCards from "./components/Home/userCards";
import UserCard from "./components/UserCard/UserCard";

const Header = () => <h1>User cards</h1>
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<UserCards />} exact />
          <Route path="/addNewUser" element={<UserCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
