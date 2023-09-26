import React, { useState } from "react";
import { createItem } from "../api";
//Ignore errors here because it will grab and update from the API objects
export default function CreateItemsForm({ Items, setItems }) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createItem(Title, Description);
    if (APIData) {
      console.log("New Item: ", APIData.data.newItem);

      // Resetting all Items manually
      const newItemsList = [...Items, APIData.newItems];
      setItems(newItemsList);

      setTitle("");
      setDescription("");
    } else {
      setError("Error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        value={Title}
        type="text"
        name="Title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={Description}
        type="text"
        name="Description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
