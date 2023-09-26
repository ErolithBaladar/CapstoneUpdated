import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleItem } from "../api";
import ItemCard from "./ItemCard";

export default function SingleItems() {
  const { id } = useParams();

  const [Items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSingleItems() {
      const APIResponse = await fetchSingleItem(id);
      console.log(APIResponse);
      if (APIResponse) {
        setItems(APIResponse);
        console.log(Items + "Items within");
      }
      else {
        setError("Error");
      }
    }
    getSingleItems();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {Items && <ItemCard Items={Items} />}
    </div>
  );
}