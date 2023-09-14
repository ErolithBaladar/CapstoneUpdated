import { useNavigate } from "react-router-dom";
import { deleteItems } from "../api";
import styles from "../css/ItemsCard.module.css";

export default function ItemsCard({ Items }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deleteItems(Items.id);
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
          src={Items.imageUrl}
          alt=""
        />
        <figcaption>
          <p>Name: {Items.name}</p>
          <p>Desc: {Items.Desc}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Items</button>
    </div>
  );
}