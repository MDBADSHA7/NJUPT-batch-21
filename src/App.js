import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Login from './Component/Login/Login';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
