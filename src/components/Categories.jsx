import { CategoriesControl } from "../api"
import { useEffect } from "react"

export default function CategoriesLister({Categories, onSelectedCategory}){
    console.log("Categories" + Categories);
    
    const CategorieToDisplay = Categories;
    
    return (
    <>

<label htmlFor="Categories">Categories:</label>
<select name="Categories" id="Categories" onChange={(e) => onSelectedCategory(e.target.value)}>
    <option value="null" id="null" />
{Categories && CategorieToDisplay.map((Categorie,index) => {return <option key={index} value={Categorie}> {Categorie} </option>})}

</select>
</>
    )
}