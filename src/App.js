
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/HomePage/Home';
import UserLogin from './Pages/user/UserLogin';
import UserRegister from './Pages/user/UserRegister';
import AdminLogin from './Pages/admin/AdminLogin';
import Emergency from './Pages/emergency/Emergency';
import Landingpage from './Pages/UserLandingpage/Landingpage';
import DashboardUser from './Pages/userDashboard/DashboardUser';
import AddPosts from './Pages/addPost/AddPosts';
import EditPost from './Pages/editPost/EditPost';
import AllPost from './Pages/allpost/AllPost';
import WeatherForecast from './Pages/weatherForecast/WeatherForecast';
import Forecasting from './Pages/forecasting/Forecasting';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import UserEmergecy from './Pages/userEmergency/UserEmergecy';



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/userRegister' element={<UserRegister/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/emergency' element={<Emergency/>}/>
        <Route path='/home' element={<Landingpage/>}/>
        <Route path='/userEmergency' element={<UserEmergecy/>}/>
        <Route path='/userDashboard' element={<DashboardUser/>}/>
        <Route path='/addPost' element={<AddPosts/>}/>
        <Route path='/editPost' element={<EditPost/>}/>
        <Route path='/allPost' element={<AllPost/>}/>
        <Route path='/weatherForecast' element={<WeatherForecast/>}/>
        <Route path='/Forecaste' element={<Forecasting/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
