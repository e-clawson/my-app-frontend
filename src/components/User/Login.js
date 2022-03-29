import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../context/user.js"
import { MessageContext } from '../../context/message.js'

const Login = () => {
    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext); 

    const [userObj, setUserObj] = useState({
        email: "", 
        password: ""
    });

    const history = useHistory()

    const handleChange = (e) => {
        setUserObj({
            ...userObj,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if  ([userObj.email, userObj.password].some(val => val.trim() === "")){
            alert ("Please provide an email and password")
        }
    }

    fetch("http://127.0.0.1:9393/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then(resp => {
        if (resp.status === 200) {
            resp.json()
            .then((data) => {
                setUser(data.user)
                setMessage({message: data.message, status: "Success"})
                history.push("/profile")
            })
        } else {
            resp.json()
            .then(error => {
                setUserObj({
                    email: "", 
                    password: ""
                })
                setMessage({message: error.message, status:"error"})
            })
            .catch(error => setMessage({message: error, status: "error"}))
        }
    })


  return (
    <>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Email</label>
            <input onChange={handleChange} type="text" name="email" value={userObj.email}/>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" value={userObj.password}/>
            <input type="submit" value="login" />
        </form>
    </>
  )
}

export default Login