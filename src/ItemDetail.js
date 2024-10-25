import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemList from "./ItemList";

function ItemDetails() {
  const { id } = useParams()
  const [items, setItems] = useState([]);
  const [searchId, setSearchId]=useState("");
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async() => {
      setIsLoading(true)
      try {
          const response = await fetch(`https://date.nager.at/api/v2/publicholidays/${searchId}/${id}`)
          if (!response.ok) {
              throw new Error("Failed to fetch data")
          }
          const result = await response.json()
          console.log(result)
          setItems(result)
          setIsLoading(false)
      }
      catch(error) {
          console.log("Error")
      }
  }
  const handleSearch=()=>{
    fetchData()
}
  return (
    <div>
    {isLoading && <LoadingSpinner/>}
    <div className="detail-info">
        Type a year: <input className="input" type="text" value={searchId} onChange={(e)=>setSearchId(e.target.value)}></input>
        <button className="btn" onClick={handleSearch}>Search</button>
        {
            items.map((m, index)=>
            <ItemList key={index} itemlist={m}></ItemList>
        )}
    </div>
  </div>
);
}
  
export default ItemDetails;
  