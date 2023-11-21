
import './App.css';
import {  Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import IntroPage from './components/IntroPage';
import CourseDetails from './components/CourseDetails';
import CoursesPage from './components/CoursesPage';
import Wishlist from './components/Wishlist';
import TrainerDashboard from './components/trainer/TrainerDashboard';
import TAddCourse from './components/trainer/TAddCourse';

function App() {
  return (
    <div className=" font-Poppins">
      <Routes>
        <Route exact path="/" Component={IntroPage} />
        <Route exact path="/Login" Component={LoginPage} />
        <Route exact path="/Register" Component={Register} />
        <Route exact path="/Dashboard" Component={UserDashboard} />
        <Route exact path="/Course/:courserId" Component={CourseDetails} />
        <Route exact path="/Courses" Component={CoursesPage} />
        <Route exact path="/Wishlist" Component={Wishlist} />
        <Route exact path="/Trainer" Component={TrainerDashboard} />
        <Route exact path="/AddCourse" Component={TAddCourse} />
      </Routes>
    </div>
  );
}
export default App;
