
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/HomePage/Home';
import UserLogin from './Pages/user/UserLogin';
import UserRegister from './Pages/user/UserRegister';
import AdminLogin from './Pages/admin/AdminLogin';
import Emergency from './Pages/emergency/Emergency';
import Landingpage from './Pages/UserLandingpage/Landingpage';
import UserEmergency from './userEmergency/userEmergency';



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/userRegister' element={<UserRegister/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/emergency' element={<Emergency/>}/>
        <Route path='/home' element={<Landingpage/>}/>
        <Route path='/userEmergency' element={<UserEmergency/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
