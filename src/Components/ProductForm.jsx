import '../Styles/ProductForm.css'

export const ProductForm = ({product, setProduct, setPList, sendData}) => {

    const handleChange = (e) => {

        setProduct({...product, [e.target.name]:e.target.value})
        console.log(e)

    }

    return (
        <div>

            <form className="ProductForm">
                <input type="text" placeholder="Enter the title" name="title" value={product.title} onChange={handleChange}/>
                <select name="gender" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="number" placeholder="Enter the price" name="price" value={product.price} onChange={handleChange}/>
                <input type="text" placeholder="Enter the category" name="category" value={product.category}  onChange={handleChange}/>
                <input type="text" placeholder="Enter the image" name="image" value={product.image} onChange={handleChange}/>
                <input type="submit" value="Submit" onClick={sendData} style={{cursor:'pointer'}} />
            </form>

        </div>
    )

}