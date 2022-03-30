import { useState } from "react"
import { useHistory } from "react-router-dom"

const SignUp = () => {
  const [user, setUser] = useState({
      username: "",
      firstName: "", 
      lastName: "", 
      passwordDigest: "", 
      email: "", 
      role: "", 
  });

  const history = useHistory()

  const handleChange = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([user.username, user.firstName, user.lastName, user.passwordDigest, user.email, user.role].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }

  const newUser = {
    username: user.username,
    first_name: user.firstName,
    last_name: user.lastName,
    password_digest: user.passwordDigest,
    email: user.email,
    role: user.role
  }

  fetch("http://127.0.0.1:9393/users", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser) 
  })
  .then(() => history.push("/"))
}

  return (
    <>
      <h3>Sign Up!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> Username</label>
          <input onChange={handleChange} type="text" name="username" value={user.username} required/> <br />
          <label htmlFor="firstName"> First Name</label>
          <input onChange={handleChange} type="text"  name="firstName" value={user.firstName} required/> <br />
          <label htmlFor="lastName"> Last Name</label>
          <input onChange={handleChange} type="text"  name="lastName" value={user.lastName} required/> <br />
          <label htmlFor="email"> Email Address</label>
          <input onChange={handleChange} type="text" name="email" value={user.email} required/> <br />
          <label htmlFor="password"> Password</label>
          <input onChange={handleChange} type="text" name="password" value={user.passwordDigest} required/> <br />
          <label htmlFor="role"> Role</label>
          <input onChange={handleChange} type="text" name="role" value={user.role} required/> <br />
          <input type="submit" value="Add User" />
        </form>
    </>
  )
}

export default SignUp