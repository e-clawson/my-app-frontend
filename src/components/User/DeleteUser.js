import { useEffect, useContext } from "react";
import { MessageContext } from "../../context/message";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

const DeleteUser = () => {
    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        fetch("http://127.0.0.1:9393/users/:id/delete", {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            setUser(null)
            setMessage({message: data.message, status: "User Successfully Deleted!"})
            history.push("/home")
        })
        .catch(err => console.log(err))
    }, [history, setUser, setMessage]);

    return (
        <div>Loading...</div>
    )
}

export default DeleteUser;