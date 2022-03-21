import "./App.css";
import logo from "./logo.png";
import {Routes,Route,Link} from "react-router-dom"
import  { Home } from "./Pages/Home/home";
import {Cart} from "./Pages/Cart/cart";
import {Product} from "./Pages/Product/product"
import { Wishlist } from "./Pages/Wishlist/wishlist";
import { Signup } from "./Pages/auth/signup";
import { Login } from "./Pages/auth/login";
import { Forgot } from "./Pages/auth/forgot";


function App() {
  return (
    <div className="App">
     <nav>
       <Link style={{cursor:"pointer"}} to="/">Home</Link>
       <Link style={{cursor:"pointer"}} to="/cart">Cart</Link>
       <Link style={{cursor:"pointer"}} to="/product">Product</Link>
       <Link style={{cursor:"pointer"}} to="/wishlist">Wishlist</Link>
       <Link style={{cursor:"pointer"}} to="/signup">Signup</Link>
       <Link style={{cursor:"pointer"}} to="/login">Login</Link>
       <Link style={{cursor:"pointer"}} to="/forgot">Forget</Link>

     </nav>
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
