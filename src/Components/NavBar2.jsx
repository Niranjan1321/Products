import React from "react"
import {Link} from "react-router-dom"
import '../Styles/navBar2.css'

export const NavBar2 = () => {

    return(
        <div className="navBar2">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/users'>Users</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}