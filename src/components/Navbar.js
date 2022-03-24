import { NavLink } from "react-router-dom" 

const style = {
    width: "100%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    backgroundColor: "lightBlue",
    verticalAlign: "center",
};

const Navbar = () => {
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
           
        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "blue"
           }}
                exact 
                style={style}
                to="/profile"
           >User Profile</NavLink> 
           <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/music/new"
           >New Piece</NavLink> 
             <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "blue"
           }}
                exact 
                style={style}
                to="/login"
           >Login</NavLink> 

    </div>
  )
}

export default Navbar