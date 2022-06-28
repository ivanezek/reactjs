import { useContext } from "react"
import { CartContext } from "./CartContextProvider"



const CartItem = ({product}) => {
    const {DeleteItem} = useContext(CartContext)
  const {name, id, img} = product
    return (
    <div>
        <img src={img} alt={img} />
        <h4>{name}</h4>
        <button onClick={() => DeleteItem(id)}>Borrar producto</button>
    </div>
  )
}

export default CartItem