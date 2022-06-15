import { useState } from "react"
import { useEffect } from "react"
import { getFetchOne } from "./helpers/getFetch"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState({})
    useEffect( () =>{
        getFetchOne()
            .then((resp) => SetProducto(resp))
            .catch(err => console.log(err))
    })

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer