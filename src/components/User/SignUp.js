import { useState, useContext} from "react"
import { useHistory } from "react-router-dom"
// import { UserContext } from "../../context/user.js"
// import { MessageContext } from '../../context/message.js'

const SignUp = () => {
  // const {setUser} = useContext(UserContext);
  // const {setMessage} = useContext(MessageContext); 

  const [userObj, setUserObj] = useState({
      username: "",
      firstName: "", 
      lastName: "", 
      password: "", 
      email: "", 
      role: "", 
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
      if ([userObj.username, userObj.firstName, userObj.lastName, userObj.password, userObj.email, userObj.role].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }

  const newUser = {
    username: userObj.username,
    first_name: userObj.firstName,
    last_name: userObj.lastName,
    password: userObj.password,
    email: userObj.email,
    role: userObj.role
  }

  fetch("http://127.0.0.1:9393/users", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser) 
  })
  .then(() => history.push("/login"))
  }

  return (
    <>
      <h3>Sign Up!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> Username</label>
          <input onChange={handleChange} type="text" name="username" value={userObj.username} required/> <br />
          <label htmlFor="firstName"> First Name</label>
          <input onChange={handleChange} type="text"  name="firstName" value={userObj.firstName} required/> <br />
          <label htmlFor="lastName"> Last Name</label>
          <input onChange={handleChange} type="text"  name="lastName" value={userObj.lastName} required/> <br />
          <label htmlFor="email"> Email Address</label>
          <input onChange={handleChange} type="text" name="email" value={userObj.email} required/> <br />
          <label htmlFor="password"> Password</label>
          <input onChange={handleChange} type="password" name="password" value={userObj.password} required/> <br />
          <label htmlFor="role"> Role</label>
          <input onChange={handleChange} type="text" name="role" value={userObj.role} required/> <br />
          <input type="submit" value="Add User" />
        </form>
    </>
  )
}

export default SignUp;