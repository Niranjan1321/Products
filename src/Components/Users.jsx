import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export const Users = () => {

    const [users, setUsers] = useState([])

    const fetchusers = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then(res=>res.json())
        .then(res=>{
        setUsers(res.data)
        console.log(res.data)
        })
    }

    useEffect(()=>{
        fetchusers()
    },[])
    
    return(
        <div>
          {users?.map((user, i)=>
           (<div key={user.id}>
            <p > {user.id} - <Link to={`/users/${user.id}`}> {user.last_name} </Link></p>
          </div>)
          )} 
        </div>
    )
}