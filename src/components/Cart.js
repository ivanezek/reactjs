import { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
function Cart(){
  
  const {cartList, EmptyCart, PriceTotal, IconCart} = useContext(CartContext)

  return (
    <>  
      {cartList.length <1? <p>Carrito vacío</p> : cartList.map((i) => <CartItem key={i.producto.id} product={i.producto} />)}

      <button onClick={EmptyCart}>Limpiar el carrito</button>

      <p>El precio total es: {PriceTotal()} ARS</p>
      <p>La cantidad total de items del Carrito es {IconCart()}</p>
    </>
  )
}

export default Cart