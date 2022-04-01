import React from 'react'
import {useContext} from 'react'
// import { useHistory } from 'react-router-dom'
import { UserContext } from "../../context/user.js"
import { DeleteUser } from "./DeleteUser"
// import { MessageContext } from '../../context/message.js'

const UserProfile = () => {
  const {setUser} = useContext(UserContext);

  return (
  <>
    <h2>My Music List</h2>
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Composer</td>
          <td>Instrumentation</td>
          <td>Year Composed</td>
          <td>Length</td>
          <td>rating </td>
        </tr>
      </thead>

        <tbody>
         
        </tbody>

    </table>

    <button onClick={() => DeleteUser()}> Delete My Profile</button>
  </>
  )
}

export default UserProfile;
