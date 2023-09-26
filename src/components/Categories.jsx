import { CategoriesControl } from "../api"
import { useEffect } from "react"

export default function CategoriesLister({Categories}){
    console.log("Categories" + Categories);
    
    const CategorieToDisplay = Categories
    return (
    <>

<label htmlFor="Categories">Categories:</label>
<select name="Categories" id="Categories">
    <option value="null" id="null" />
{Categories && CategorieToDisplay.map((Categorie,index) => {return <option key={index} value={Categorie}> {Categorie} </option>})}

</select>
</>
    )
}