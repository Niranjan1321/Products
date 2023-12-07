import React from "react"
import { useNavigate } from "react-router-dom"
import "../Styles/Login.css"

export const Login = () => {

    const [login, setLogin] = React.useState(
        {
        "email":"",
        "password":""
        }
    )

    const navigate = useNavigate();

    const handleLogin = (e) => {
        setLogin({...login , [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    const handleSubmit = () => {

        const payload = {
           "email":login.email,
           "password":login.password
        }

        fetch('https://reqres.in/api/login', {
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
            if(res.token){
                console.log('Login successfull')
                navigate('/products')
            }
        }).catch(err=>console.log('Error occured'))
    }



    return(
        <>
        <div className="LoginContainer">
        <h1>Login</h1>
        <input className="Input" type="text" name="email" value={login.email} placeholder="Enter user name" onChange={handleLogin} />
        <input className="Input" type="text" name="password" value={login.password} placeholder="Enter password" onChange={handleLogin} />
        <input className="Button" type="submit" value={"LOGIN"} onClick={handleSubmit} />
        </div>
        </>
    )


}