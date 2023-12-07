import React from "react"
import { Link } from "react-router-dom"
import '../Styles/NavBar3.css'
import { useNavigate } from "react-router-dom"

export const NavBar3 = () => {

    const navi = useNavigate()

    return(
        <>
        <div className="NavBar3">
        <Link to='/'>Home</Link>
        <Link to='/products'>products</Link>
        <Link to= '/productForm'>Product Form</Link>
        </div>
        </>

    )

}