const baseUrl = `https://fakestoreapi.com/products`;
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
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createItem(title, description) {
  try {
    const response = await fetch(`${baseUrl}/`, {
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
    const response = await fetch(`${baseUrl}/${id}`, {
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
    const response = await fetch(`${baseUrl}/categories`);
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
      const response = await fetch(`${baseUrl}/category/${category}`);
      const result = await response.json();
      console.log(result);
      return result;
    } 
    catch (error) {
      console.error("Error");
    }

}

export async function Cart(cart){
  try{
    const response = await fetch(`${baseUrl}/carts?userId=1`);
    const result = await response.json();
    console.log(result);
    return result;

  }
  catch (error) {
    console.error("Error");
  }

}

