import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/ItemListAll.module.css";
import ItemsListName from "./ItemListName";

export default function ListCartButton({ Items }) {

  console.log("Next");
  console.log(Items);
  const navigate = useNavigate();
  const CartToDisplay = Items;
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/cart`);
        }}
      >
        <h3>{"Cart"}</h3>

      </button>
    </div>
  );
}
