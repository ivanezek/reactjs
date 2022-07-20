import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState({})
    const {id} = useParams()
    
      useEffect(() =>{
          const db = getFirestore()
          const queryItem = doc(db, 'productos', id)
          getDoc(queryItem) // promesa
          .then(data => SetProducto( {id: id, ...data.data()} )) 
        })


  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer