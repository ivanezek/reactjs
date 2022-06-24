import { useContext } from "react"
import { CartContext } from "./CartContextProvider"



const CartItem = ({product}) => {
    const {DeleteItem} = useContext(CartContext)
  const {name, id, price} = product
    return (
    <div>
        <h4>{name}</h4>
        <h5>Su precio es de {price}</h5>
        <button onClick={() => DeleteItem(id)}>Borrar producto</button>
    </div>
  )
}

export default CartItem