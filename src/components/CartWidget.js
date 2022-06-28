import { useContext } from "react"
import { CartContext } from "./CartContextProvider"

function CartWidget(){
    
    const {IconCart} = useContext(CartContext)

    return (
        <div className="carrito">
            <img src='assets/img/Cart.svg' alt="Carrito" className="icon-cart" />
            <div className="carrito-total">
                <h1>{IconCart()}</h1>
            </div>
        </div>


    )
}



export default CartWidget

