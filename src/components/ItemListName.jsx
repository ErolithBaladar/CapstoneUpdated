import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/ItemListAll.module.css";

export default function ItemsListName({ Items }) {
  console.log("Next");
  console.log(Items);
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/${Items.id}`);
        }}
      >
        <h3>{Items.title}</h3>

        <img className={styles.img} img src={Items.image} alt="null" />
      </button>
    </div>
  );
}
