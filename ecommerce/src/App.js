import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom"
import { NavBar } from "./component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/product"
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Login } from "./Pages/auth/Login";
import { Signup } from "./Pages/auth/Signup";
import { Forgot } from "./Pages/auth/Forgot";
import { CartList } from "./Pages/Cart/CartList";

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/product"element={<Product></Product>}></Route>
        <Route path="/wishlist"element={<Wishlist></Wishlist>}></Route>
        <Route path="/cartlist"element={<CartList></CartList>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/signup"element={<Signup></Signup>}></Route>
        <Route path="/forgot"element={<Forgot></Forgot>}></Route>
      </Routes>
  
     
    
    </div>
  );
}

export default App;
