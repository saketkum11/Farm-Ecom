import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom"
import {Link}  from "react-router-dom"
import Home from "./Pages/Home/Home.jsx"
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
