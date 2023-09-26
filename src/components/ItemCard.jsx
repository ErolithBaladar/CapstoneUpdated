import { useNavigate } from "react-router-dom";
import { deleteItem } from "../api";
import styles from "../css/ItemsCard.module.css";

export default function ItemsCard({ Items }) {
  console.log("After" + Items);
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deleteItem(Items.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <img
          className={styles.img}
          src={Items.image}
          alt=""
        />
        <figcaption>
          <p>Name: {Items.title}</p>
          <p>Desc: {Items.description}</p>
          <p>Price: {Items.price}</p>
          <p>Rating: {Items.rating.rate} Count: {Items.rating.count}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Items</button>
    </div>
  );
}