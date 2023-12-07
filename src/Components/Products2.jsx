import React from "react"
import { Link } from "react-router-dom"

export const Products2 = () => {

    const [products, setProducts] = React.useState([])
    const [loading, isLoading] = React.useState(false)

    React.useEffect(()=>{
        isLoading(true)
        fetch('http://localhost:8080/PRODUCTs')
        .then(res=>res.json())
        .then(res=>{
            isLoading(false);
            setProducts(res);
        })
        .catch(
            (error)=>{
                isLoading(false)
                console.log(error)
            }
        )
    },[]
    )

    if(loading){
        return <div>Page is loading</div>
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>
                    Name
                    </th>
                    <th>
                    Price
                    </th>
                    <th>
                    Id
                    </th>
                    <th>
                    More Details
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((product)=>(
                        <tr>
                            <td>
                            {product?.name}
                            </td>
                            <td>
                            {product?.price}
                            </td>
                            <td>
                            {product?.id}
                            </td>
                            <td>
                            <Link to={`/products/${product?.id}`}>More details</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}