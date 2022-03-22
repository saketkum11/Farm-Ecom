import React from "react"
import { Link } from "react-router-dom"

export function NavBar(){
    return(<div>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/cartlist">Cart</Link>
    <Link to="/wishlist">Wishlist</Link>
    <Link to="/signup">SignUp</Link>
    <Link to="/login">Login</Link>
    <Link to="/forgot">Forgot</Link>
    </div>);

}