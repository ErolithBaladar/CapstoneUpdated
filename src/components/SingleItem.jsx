import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleItems } from "../api";
import ItemCard from "./ItemCard";

export default function SingleItems() {
  const { id } = useParams();

  const [Items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSingleItems() {
      const APIResponse = await fetchSingleItems(id);
      if (APIResponse.success) {
        setItems(APIResponse.data.Items);
      } else {
        setError(error.message);
      }
    }
    getSingleItems();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {Items && <ItemCard player={Items} />}
    </div>
  );
}