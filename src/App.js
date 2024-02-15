
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/HomePage/Home';
import UserLogin from './Pages/user/UserLogin';
import UserRegister from './Pages/user/UserRegister';
import AdminLogin from './Pages/admin/AdminLogin';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/userRegister' element={<UserRegister/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>

      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
