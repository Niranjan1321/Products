import React from "react"
import { NavBar2 } from "./Components/NavBar2"
import { Routes , Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Products } from "./Components/Products"
import { Users } from "./Components/Users"
import { Login } from "./Components/Login"
import { UserDetails } from "./Components/UserDetails"
import { NavBar3 } from "./Components/NavBar3"
import { Products2 } from "./Components/Products2"
import { ProductDetails } from "./Components/ProductDetails"
import { PageNotFound } from "./Components/PageNotFound"

export const Routess = () => {

    return(
        <>
        <NavBar3/>
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/products" element={<Products2/>}>Products</Route>
            <Route path="/products/:id" element={<ProductDetails/>}>Product Details</Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        </>
    )
}