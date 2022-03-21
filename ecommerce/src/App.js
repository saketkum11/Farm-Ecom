import "./App.css";
import logo from "./logo.png";
import {Routes,Route,Link} from "react-router-dom"
import { Home } from "./Pages/Home/home";
import {Cart} from "./Pages/Cart/cart";
function App() {
  return (
    <div className="App">
     <nav>
       <Link to="/">Home</Link>
       <Link to="/product">Product</Link>
       <Link to="/cart">Cart</Link>

     </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
