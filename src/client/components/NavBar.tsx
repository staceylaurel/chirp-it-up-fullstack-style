import * as React from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <>
    <Link to="/" >Home</Link>
    <Link to="/newchirp">Create New Chirp</Link>
    </>
  );
};

interface NavBarProps{

}

export default NavBar;