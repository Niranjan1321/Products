import React from "react"
import '../Styles/ProducList.css'
import { Link } from "react-router-dom"

export const ProductList = ({pList , deleteData, handlePage, page, setGender, filterData, sort, sortData}) => {

    return(
        <>
        <div className="Functionalities">
        <label >Filter by   <select name="gender" onChange={(e)=>{filterData(e.target.name, e.target.value)}}>
            <option value="">None</option>  
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </label>
        <button onClick={sortData}>{sort==="On"?"Sort Off" : "Sort by Price"}</button>
        </div>
        <div className="productList">
        {pList.map((product, i)=>
        <Link to={`/product/${product.id}`}>
        <div className="mainList" key={i}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h3>{product.category}</h3>
            <h4>{product.gender}</h4>
            <button onClick={()=>{deleteData(product.id)}}>Delete</button>
        </div>
        </Link>
        )}
        </div>
        <div className="pageButtons">
            {page>1 && <button onClick={()=>{handlePage(-1)}}>Previous</button>}
            <button onClick={()=>{handlePage(+1)}}>Next</button>
        </div>
        </>
    )
}