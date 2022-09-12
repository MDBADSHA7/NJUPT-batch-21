import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';

function App() {
  return (
    <div className="px-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
