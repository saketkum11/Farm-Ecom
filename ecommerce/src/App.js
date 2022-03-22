import "./App.css";
import logo from "./logo.png";
import {Routes,Route,Link} from "react-router-dom"



function App() {
  return (
    <div className="App">

  
  
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
