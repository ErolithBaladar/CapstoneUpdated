import { useState, useEffect } from "react";
import { CartList } from "../api";
import ItemsListName from "./ItemListName";


export default function Cart() {
  const [Carts, setCarts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getCartList() {
      const APIResponse = await CartList();
      console.log(APIResponse);
      if (APIResponse) {
        setCarts(APIResponse);
      } else {
        setError("Error");
      }
    }

    getCartList();
  }, []);


  const CartsToDisplay = Carts;
  return (
    <div>
      {CartsToDisplay.map((Carts) => {
        return <ItemsListName key={Carts.id} Carts={Carts} />;
      })}
    </div>
  );
}