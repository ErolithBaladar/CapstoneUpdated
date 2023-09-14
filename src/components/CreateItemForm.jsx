import React, { useState } from "react";
import { createItems } from "../api";
//Ignore errors here because it will grab and update from the API objects
export default function CreateItemsForm({ Items, setItems }) {
  const [name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createItems(name, Desc);
    if (APIData.success) {
      console.log("New Item: ", APIData.data.newItem);

      // Resetting all Items manually
      const newItemsList = [...Items, APIData.data.newItems];
      setItems(newItemsList);

      setName("");
      setDesc("");
    } else {
      setError(APIData.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        value={name}
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={Desc}
        type="text"
        name="Desc"
        placeholder="Desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
