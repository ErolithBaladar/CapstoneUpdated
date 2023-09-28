import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartList } from "../api";
import Product from "./Product";
import { fetchSingleItem } from "../api";

export default function Cart() {
  const [cartInfo, setCartInfo] = useState({});
  const [error, setError] = useState(null);

  const { productId } = useParams();
  console.log("ProductID + " + productId);
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getSingleItems() {
      const APIResponse1 = await fetchSingleItem(cartInfo);
      console.log("GetSingleItem API RESPONSE + : " + APIResponse1);
      if (APIResponse1) {
        setItems(APIResponse1);
        console.log(items + "Items within");
      } else {
        setError("Error");
      }
    }

    async function getCartList() {
      const APIResponse = await CartList(5); //5
      console.log("Response" + APIResponse);
      if (APIResponse) {
        console.log("carts = ", APIResponse);
        setCartInfo(JSON.parse(APIResponse));
      } else {
        setError("Error");
      }
    }

    getCartList();
    getSingleItems();
  }, []);

  return (
    <div>
      {cartInfo.products?.map((productItem, productItemIndex) => {
        return (
          <Product key={productItemIndex} /* name of the object being sent */ product={productItem}/>
        );
      })}
    </div>
  );
}
