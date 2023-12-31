import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/ItemListAll.module.css";

export default function ItemsListName({ item }) {
  console.log("Next");
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/${item.id}`);
        }}
      >
        <h3>{item.title}</h3>

        <img className={styles.img} src={item?.image} alt="null" />
      </button>
    </div>
  );
}
