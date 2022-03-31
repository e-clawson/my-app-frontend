import { useEffect, useContext } from "react";
import { MessageContext } from "../../context/message";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

const Logout = () => {
    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        fetch("http://127.0.0.1:9393/logout", {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            setUser(null)
            setMessage({message: data.message, status: "User Successfully Logged Out!"})
            history.push("/login")
        })
        .catch(err => console.log(err))
    }, [history, setUser, setMessage]);

    return (
        <div>Loading...</div>
    )
}

export default Logout;