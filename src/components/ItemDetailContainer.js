import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState([])
    const {id} = useParams()
    
    /*useEffect(() =>{
      if(id){
        getFetch()
        .then((resp) => SetProducto(resp.find(productos => productos.id === id)))
        .catch(err => console.log(err))
      }
    }, [id])*/

      useEffect(() =>{
          const db = getFirestore()
          const queryItem = doc(db, 'productos', id)
          getDoc(queryItem) // promesa
          .then(data => SetProducto( {id: producto.id, ...data.data()} )) 
        })


  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer