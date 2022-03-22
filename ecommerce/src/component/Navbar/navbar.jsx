import React from "react"

export function NavBar(){
    return ( 
      <nav>
        <Link style={{cursor:"pointer"}} to="/">Home</Link>
        <Link style={{cursor:"pointer"}} to="/cart">Cart</Link>
        <Link style={{cursor:"pointer"}} to="/product">Product</Link>
        <Link style={{cursor:"pointer"}} to="/wishlist">Wishlist</Link>
        <Link style={{cursor:"pointer"}} to="/signup">Signup</Link>
        <Link style={{cursor:"pointer"}} to="/login">Login</Link>
        <Link style={{cursor:"pointer"}} to="/forgot">Forget</Link>
 
      </nav>)
}