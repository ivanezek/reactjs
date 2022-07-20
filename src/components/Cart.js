import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
function Cart(){
  
  const {cartList, EmptyCart, PriceTotal} = useContext(CartContext)


  return (
    <div className="cart-view container">  
      {cartList.length <1? 

        <div className="empty-cart">
          <p>Carrito vacío</p>
        </div>
      
      :
      cartList.map((i) => <CartItem key={i.producto.id} cant={i.cant} product={i.producto} />)
      }
      
      {cartList.length >=1 ? 
      <div>
        <p className="total-price-checkout">El precio total es: {PriceTotal()} ARS</p>
        <div>
          <button className="btn btn-success finish-buy"> <Link to='/checkout'>Terminar compra</Link> </button>
          <button className="btn btn-warning" onClick={EmptyCart}>Limpiar el carrito</button>
        </div>
      </div>
      :
        <div className="view-products"><Link to='/'>
          <button className="btn btn-info">Ver productos</button></Link>
        </div>
    }
    </div>
  )
}

export default Cart