import { useEffect, useState } from "react";
import { CategoriesControl, fetchAllItems } from "../api";
import CategoriesNamer from "./Categories";
import ItemsListName from "./ItemListName";

let gTotalItems = [];

export default function Allitems() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllItems() {
      const APIResponse = await fetchAllItems();
      console.log(APIResponse);
      if (APIResponse) {
        gTotalItems = APIResponse;
        setItems(gTotalItems);
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

  const onSelectedCategory = (category) => {
    let newItems = gTotalItems.filter((item) => {
      if (item.category === category) {
        return true;
      }

      return false;
    });

    setItems([...newItems]);
  };

  console.log("Categories in itemlist" + document.getElementById(categories));
  return (
    <div>
      <CategoriesNamer
        Categories={categories}
        onSelectedCategory={(category) => onSelectedCategory(category)}
      />
      {/* Set items from the array => objects into a array */}

      {items.map((item, itemIndex) => {
        return <ItemsListName key={itemIndex} item={item} />;
      })}
    </div>
  );
}

