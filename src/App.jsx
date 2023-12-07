import './App.css';
import { NavBar } from './Components/NavBar';
import { ProductForm } from './Components/ProductForm';
import { useState , useEffect } from 'react';
import { ProductList } from './Components/ProductList';
import { NavBar2 } from './Components/NavBar2';
import { NavBar3 } from './Components/NavBar3';
import { Routes , Route } from "react-router-dom"
import { Home } from './Components/Home';
import { Products2 } from './Components/Products2';
import { ProductDetails } from './Components/ProductDetails';
import { PageNotFound } from './Components/PageNotFound';
import { Login } from './Components/Login';

function App() {

  const [pList, setPList] = useState([])

  const[toggle, setToggle] = useState("true")

  // const[loading, setLoading] = useState("false")

  const[page, setPage] = useState(1)

  const[sort, setSort] = useState("off")

  const [product, setProduct] = useState({
    "title": "",
    "gender": "",
    "price": "",
    "category": "",
    "image": ""
  })

  const handlePage = (value) => {
    setPage(page+value)
  }

  const handleToggle = () => {
    setToggle(toggle==="true"?"false":"true")
  }

  const sendData = (event) => {

    event.preventDefault()

    fetch(' http://localhost:8080/PRODUCTS', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(res => res.json())
      .then(res => getData())

  }

  const getData = () => {

    fetch(`http://localhost:8080/PRODUCTS/?_page=${page}&_limit=8`)
      .then(res => res.json())
      .then(res => {
        setPList(res)
      })
  }

  const filterData = (name, value) => {

   if(value===""){
    fetch(`http://localhost:8080/PRODUCTS`)
    .then(res => res.json())
    .then(res => {
      setPList(res)
    })
   }
   else{
    fetch(`http://localhost:8080/PRODUCTS/?${name}=${value}`)
    .then(res => res.json())
    .then(res => {
      setPList(res)
    })
   }

  }

  const sortData = () => {

    setSort(sort==="On"?"off" : "On")

     if(sort==="On"){
      fetch(`http://localhost:8080/PRODUCTS?_sort=price&_order=desc`)
     .then(res => res.json())
     .then(res => {
       setPList(res)
     })
     }

     if(sort==="off"){
      fetch(`http://localhost:8080/PRODUCTS`)
     .then(res => res.json())
     .then(res => {
       setPList(res)
     })
     }
 
   }

  const deleteData = (id) => {

    fetch(`http://localhost:8080/PRODUCTS/${id}`, {
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(res=>getData())
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <>
      {/* <NavBar {...{toggle , handleToggle}}/>
      <NavBar2/>
      <NavBar3/>
      {toggle==="true"? <ProductForm {...{setPList, product, setProduct, sendData}}/> :  <ProductList {...{ pList , deleteData, handlePage, page, filterData, sort, sortData }} />} */}
      <NavBar3/>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path='/productForm' element={<ProductForm {...{setPList, product, setProduct, sendData}}/>}/>
            <Route path="/products" element={ <ProductList {...{ pList , deleteData, handlePage, page, filterData, sort, sortData }} />}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
