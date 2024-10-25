import "./itemList.css";

function ItemList( { itemlist } ) {
  return (
    <div className="container-itemList">
      <div className="itemList">
        <h2>{itemlist.localName}</h2>
        <h3>{itemlist.name}</h3>
        <p>{itemlist.date}</p>
        <p>{itemlist.countryCode}</p>
      </div>
    </div>
  );
}
  
  export default ItemList;
  