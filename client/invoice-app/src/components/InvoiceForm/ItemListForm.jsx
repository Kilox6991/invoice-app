//Item Name, Qty. Price, Total
function ItemListForm() {
  return (
    <div>
      <h3 style={{color:"#777F98", fontWeight:"bold", fontSize:"18px"}}>Item List</h3>
      <div>
        <ul style={{}}>
            <li>
                Item Name
                <input type="text" />
            </li>
            <li>
                Qty.
                <input type="text" />
            </li>
            <li>
                Price
                <input type="text" />
            </li>
            <li>
                Total
                <input type="text" />
            </li>
        </ul>
        <button type="button" >
        + Add New Item
      </button>
      </div>
    </div>
  );
}

export default ItemListForm;
