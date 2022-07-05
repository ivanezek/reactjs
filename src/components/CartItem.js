import { useContext } from "react"
import { CartContext } from "./CartContextProvider"



const CartItem = ({product, cant}) => {
    const {DeleteItem} = useContext(CartContext)
    const {name, id, img} = product

    return (
    <div className="cart-item-view">
        <img src={img} alt={img} />
        <h4>{name}</h4>
        <p>Usted ha seleccionado {cant} unidades</p>
        <button onClick={() => DeleteItem(id)}>Borrar producto</button>
    </div>
  )
}

export default CartItem