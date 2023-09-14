import { useState, useEffect } from "react";
import { fetchAllItems } from "../api";
import ItemsListName from "./ItemListName";
import CreateItemForm from "./CreateItemForm";

export default function Allitems() {
  const [Items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllItems() {
      const APIResponse = await fetchAllItems();
      if (APIResponse.success) {
        setItems(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllItems();
  }, []);

  const ItemsToDisplay = searchParam
    ? Items.filter((Items) => Items.name.toLowerCase().includes(searchParam))
    : Items;
  return (
    <div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <CreateItemForm Items={Items} setitems={setItems} />
      {error && <p>{error}</p>}
      {ItemsToDisplay.map((Items) => {
        return <ItemsListName key={Items.id} Items={Items} />;
      })}
    </div>
  );
}
