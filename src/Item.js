import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import "./item.css";

function Item( { item } ) {
    return (
      <div className="item-container">
        <div className="item">
          <Link to={"/details/"+item.countryCode}><h2>{item.name}</h2></Link>
          <p>{item.countryCode}</p>
        </div>
      </div>
    );
  }
  
  export default Item;
  