import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../context/user.js"
import { MessageContext } from '../../context/message.js'

const SignUp = () => {

return (
    <>
        <h3>Sign Up! </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">User Name</label>
            <input onChange={handleChange} type="text" name="username" value={user.username}/>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" value={userObj.password}/>
            <input type="submit" value="login" />
        </form>
    </>
  )
}

export default SignUp