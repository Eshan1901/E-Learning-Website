
import './App.css';
import {  Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import IntroPage from './components/IntroPage';
import CourseDetails from './components/CourseDetails';
import CoursesPage from './components/CoursesPage';

function App() {
  return (
    <div className=' font-Poppins'>
      <Routes>
        <Route exact path="/" Component={IntroPage} />
        <Route exact path="/Login" Component={LoginPage} />
        <Route exact path="/Register" Component={Register} />
        <Route exact path="/Dashboard" Component={UserDashboard} />
        <Route exact path='/Course/:courserId' Component={CourseDetails} />
        <Route exact path='/Courses' Component={CoursesPage}/>
      </Routes>
    </div>
  );
}
export default App;
