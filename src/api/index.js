//const COHORT = "2301-ftb-et-web-am";
//const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;
import Main from "../MyAPI";
const baseUrl = `${Main}`;
export async function fetchAllItems() {
  try {
    const response = await fetch(`${baseUrl}/Item`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleItem(id) {
  try {
    const response = await fetch(`${baseUrl}/Item/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createItem(name, desc) {
  try {
    const response = await fetch(`${baseUrl}/Item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        desc
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
    const response = await fetch(`${baseUrl}/Item/${id}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
