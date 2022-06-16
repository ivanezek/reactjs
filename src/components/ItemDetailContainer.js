import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "./helpers/getFetch"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState({})
    const {id} = useParams()
    
    useEffect(() =>{
      if(id){
        getFetch()
        .then((resp) => SetProducto(resp.find(productos => productos.id === id)))
        .catch(err => console.log(err))
      }
    }, [id])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer