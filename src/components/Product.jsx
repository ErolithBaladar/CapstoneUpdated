import { useNavigate } from "react-router-dom";
import styles from "../css/ItemListAll.module.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/${product.productId}`);
        }}
      >
        <h3>{product.title}</h3>

        <img className={styles.img} src={product?.image} alt="null" />
      </button>
    </div>
  );
};

export default Product;
