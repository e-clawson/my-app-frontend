import React from 'react'
import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../context/user.js"
import { MessageContext } from '../../context/message.js'

const UserProfile = () => {
  const {setUser} = useContext(UserContext);

  // I need to add something here but I'm not sure what yet. 
  // I think I need to fetch or post the user info by id from the backend
  // (kind of like in the MusicCard) and I need to display the info from the list on the page. 
  // I also need to make it so when you like a piece it shows up here

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
  </>
  )
}

export default UserProfile;
