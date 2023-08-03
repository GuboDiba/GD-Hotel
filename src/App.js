import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/navbar';
import Home from './Home/home' 
import About from './AboutUs/aboutus';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
  

     <BrowserRouter>
      <Routes>
      
        <Route path="/Home/home" element={ <Home/>}></Route>
        <Route path="/AboutUs/aboutus" element={<About/>}></Route>

  

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
