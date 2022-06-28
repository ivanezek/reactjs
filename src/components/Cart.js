import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
function Cart(){
  
  const {cartList, EmptyCart, PriceTotal, IconCart} = useContext(CartContext)

  return (
    <>  
      {cartList.length <1? 

        <p>Carrito vacío</p>
      
      :
      cartList.map((i) => <CartItem key={i.producto.id} product={i.producto} />)
      }
      
      {cartList.length >=1 ? 
      <div>
        <p>El precio total es: {PriceTotal()} ARS</p>
        <button onClick={EmptyCart}>Limpiar el carrito</button>
      </div>
      :
        <div><Link to='/'><button>Ver productos</button></Link></div>
    }
    </>
  )
}

export default Cart