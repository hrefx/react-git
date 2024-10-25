import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Item from "./Item";

function SearchBar() {
    const [isLoading, setIsLoading]=useState(false);
    const [list, setList]=useState([]);

    const fetchData=async()=>{
        setIsLoading(true)
        try{
            const response=await fetch(`https://date.nager.at/api/v3/AvailableCountries`)
            if(!response.ok)
            {
                throw new Error("Failed to fetch data")
            }
            const result=await response.json()
            console.log(result)
            setList(result)
            setIsLoading(false)
        }
        catch(error){
            console.log("Error")
        }
    }
    const onViewHolder=()=>{
        fetchData()
    }
    return (
      <div>
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        View all countries: <button className="btn" onClick={onViewHolder}>View</button>
        <h1>Countries</h1>
        <div className="info-list">
            {
                list.map((m, index)=>
                <a><Item key={index} item={m}></Item></a>
            )}
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  