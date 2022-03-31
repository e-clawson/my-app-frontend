import { NavLink } from "react-router-dom";

const style = {
    width: "100%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    backgroundColor: "lightBlue",
    verticalAlign: "center",
};

const Navbar = ({user}) => {
  return (
    <div>
        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "blue"
        }}
            exact 
            style={style}
            to="/home"
         >Home</NavLink> 

        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "blue"
        }}
            exact 
            style={style}
            to="/about"
        >About</NavLink> 
           
        {user ? <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "blue"
           }}
                exact 
                style={style}
                to="/profile"
           >User Profile</NavLink> : null}

           {user ? <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/music/new"
           >New Piece</NavLink> : null}

            {user ? <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/logout"
           >Logout</NavLink> : null}

            {!user ? <NavLink
            activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/login"
           >Login</NavLink> : null}
           
           {!user ? <NavLink
            activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/signup"
           >Sign Up</NavLink> : null}
    </div>
  )
}

export default Navbar;