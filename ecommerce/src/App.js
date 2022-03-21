import "./App.css";
import logo from "./logo.png";
import {Routes,Route,Link} from "react-router-dom"
import  { Home } from "./Pages/Home/home";
import {Cart} from "./Pages/Cart/cart";
import {Product} from "./Pages/Product/product"


function App() {
  return (
    <div className="App">
     <nav>
       <Link style={{cursor:"pointer"}} to="/">Home</Link>
       <Link style={{cursor:"pointer"}} to="/product">Product</Link>
       <Link style={{cursor:"pointer"}} to="/cart">Cart</Link>

     </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
