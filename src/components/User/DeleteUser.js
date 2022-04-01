import { useEffect, useContext, useState } from "react";
import { MessageContext } from "../../context/message";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/user";

const DeleteUser = () => {
    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()
    const {id} = useParams

    useEffect(() => {
        fetch(`http://127.0.0.1:9393/users/${id}/delete`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            setUser(null)
            setMessage({message: data.message, status: "User Successfully Deleted!"})
            history.push("/home")
            console.log("successfully deleted")
        })
        .catch(err => console.log(err))
    }, )

    return (
        <div>Deleting User...</div>
    )
}

export default DeleteUser;