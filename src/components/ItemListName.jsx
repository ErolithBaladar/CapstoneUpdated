import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemsListName({ Items }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{Items.name}</h3>
      <button
        onClick={() => {
          navigate(`/${Items.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}