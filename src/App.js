import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Search from './components/Search';
import Signup from './components/Signup';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exect path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/favs' element={<Favorites/>}/>

      <Route  path="/search/:searchKey" element={<Search/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
