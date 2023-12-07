import React from "react"
import '../Styles/NavBar.css'

export const NavBar = ({handleToggle, toggle}) => {

    return (
        <div className="NavBar">
            <h1>PRODUCTS</h1>
            <h1 onClick={handleToggle}>{toggle==="false"?"Product Form":"Product List"}</h1>
        </div>
    )
}