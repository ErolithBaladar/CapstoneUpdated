import { useState, useEffect } from "react";
import { fetchAllItems, CategoriesControl } from "../api";
import ItemsListName from "./ItemListName";
import CreateItemForm from "./CreateItemForm";
import CategoriesNamer from "./Categories";

export default function Allitems() {
  const [Items, setItems] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllItems() {
      const APIResponse = await fetchAllItems();
      console.log(APIResponse);
      if (APIResponse) {
        setItems(APIResponse);
      } else {
        setError("Error");
      }
    }

    async function getAllCategories() {
      const options = await CategoriesControl();
      console.log("Tester" + options);
      setCategories(options);
    }
    getAllCategories();
    getAllItems();
  }, []);

  const ItemsToDisplay = Items;
  console.log("Categories" + Categories);
   /* if (Categories !== null) {
    for(var i = 0; i < Items.length; i++){
      if(Items[i].category == Categories){
        return (
          <div>
            <CategoriesNamer Categories={Categories} />
    
            {ItemsToDisplay.map((Items) => {
              return <ItemsListName key={Items[i]} Items={Items} />;
            })}
          </div>
        )
      }
    }
  } 
  else {  */
    return (
      <div>
        <CategoriesNamer Categories={Categories} />
        {/* Set items from the array => objects into a array */}

        {ItemsToDisplay.map((Items) => {
          return <ItemsListName key={Items.id} Items={Items} />;
        })}
      </div>
    );
  }
//}
