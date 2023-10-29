
import './App.css';
import {  Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/Dashboard" Component={Dashboard} />
      </Routes>
    </>
  );
}

export default App;
