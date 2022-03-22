import React from "react"
import { Link } from "react-router-dom"
import { Home } from "../../Pages/Home/home";
import { Product } from "../../Pages/Product/product";
import { Cart } from "../../Pages/Cart/Cart";
import { Wishlist } from "../../Pages/Wishlist/Wishlist";
import { Signup } from "../../Pages/auth/Signup";
import { Login } from "../../Pages/auth/Login";
import { Forgot } from "../../Pages/auth/Forgot";
export function NavBar(){
    return(<>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/cart"></Link>
    <Link to="/wishlist"></Link>
    <Link to="/signup"></Link>
    <Link to="/login"></Link>
    <Link to="/forgot"></Link>
    </>);

}