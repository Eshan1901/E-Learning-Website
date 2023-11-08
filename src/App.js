
import './App.css';
import {  Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import IntroPage from './components/IntroPage';

function App() {
  return (
    <div className=' font-Poppins'>
      <Routes>
        <Route exact path="/" Component={IntroPage} />
        <Route exact path="/Login" Component={LoginPage} />
        <Route exact path="/Register" Component={Register} />
        <Route exact path="/Dashboard" Component={UserDashboard} />
      </Routes>
    </div>
  );
}
export default App;
