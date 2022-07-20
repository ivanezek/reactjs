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
        <button className="btn btn-danger" onClick={() => DeleteItem(id)}>Borrar producto</button>
        <hr></hr>
    </div>
  )
}

export default CartItem