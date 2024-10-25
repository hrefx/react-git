import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="nav">
        <a><Link to="/search">SEARCH</Link></a>
        <a><Link to="/details">DETAILS</Link></a>
        <a><Link to="/home">HOME</Link></a>
    </div>
  );
}

export default NavBar;
