import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom"
import { NavBar } from "./component/Navbar/Navbar";




function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
  
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
      </Routes>
    </div>
  );
}

export default App;
