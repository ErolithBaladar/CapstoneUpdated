const baseUrl = `https://fakestoreapi.com`;
export async function fetchAllItems() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error");
  }
}

export async function fetchSingleItem(id) {
  try {
    // Postman BaseURL/ID is what should be used ( https://fakestoreapi.com/products/1 )
    const response = await fetch(`${baseUrl}/products/${id}`);
    const result = await response.json();
    console.log("Resulting return : " + response);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createItem(title, description) {
  try {
    const response = await fetch(`${baseUrl}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteItem(id) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function CategoriesControl(){
  try {
    const response = await fetch(`${baseUrl}/products/categories`);
    const result = await response.json();
    console.log("Result" + result);
    return result;
  } 
  catch (error) {
    console.error("Error");
  }
}

export async function CategoriesSender(category){
    try {
      const response = await fetch(`${baseUrl}/products/category/${category}`);
      const result = await response.json();
      console.log(result);
      return result;
    } 
    catch (error) {
      console.error("Error");
    }

}

export async function CartList(AccountID){
  try{
    console.log("AccountID" + AccountID);
    const response = await fetch(`${baseUrl}/carts/${AccountID}`)
    const result = await response.json();
    console.log("Result" + JSON.stringify(result));
    return JSON.stringify(result);

  }
  catch (error) {
    console.error("Error");
  }

}

export async function AddItemToCart(productID, Quantity, AccountID) {
  try {
    const response = await fetch(`${baseUrl}/carts/${AccountID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productID,
        Quantity
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteItemToCart(AccountID) {
  try {
    const response = await fetch(`${baseUrl}/carts/${AccountID}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

