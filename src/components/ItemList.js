import Item from "./Item"
import { useEffect, useState } from "react";
import { getFetch } from "../components/helpers/getFetch";

function ItemList (){
    const [productos, setProductos] = useState([])

    // aplicación de useEffect para que obtenidos los resultados se refresquen los componentes
    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                //resultados guardados en useState
                setProductos(resp)
        })
        .catch(err => console.log(err))
        // .finally(()=> )
    }, [])

    console.log(productos)

    return(
        <>
            <Item productos={productos}/>
        </>
    )
}
export default ItemList
