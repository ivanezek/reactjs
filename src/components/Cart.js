import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
function Cart(){
  
  const {cartList, EmptyCart, PriceTotal} = useContext(CartContext)

  
function CartOrder(e){
  e.preventDefault()
  let order = {}

  order.buyer = {name: 'ivan', email: 'ivan@gmail.com', phoneNumber: '112345678'}
  order.total = PriceTotal()

  order.productos = cartList.map(CartItem => {
    console.log(CartItem)
    const id = CartItem.id
    const name = CartItem.product.name
    const price = CartItem.product.price * CartItem.product.cant

    return {id, name, price}
  })

  console.log(order)
}


  return (
    <div className="cart-view">  
      {cartList.length <1? 

        <p>Carrito vacío</p>
      
      :
      cartList.map((i) => <CartItem key={i.producto.id} cant={i.cant} product={i.producto} />)
      }
      
      {cartList.length >=1 ? 
      <div>
        <p>El precio total es: {PriceTotal()} ARS</p>
        <button onClick={CartOrder}>Terminar compra</button>
        <button onClick={EmptyCart}>Limpiar el carrito</button>
      </div>
      :
        <div><Link to='/'><button>Ver productos</button></Link></div>
    }
    </div>
  )
}

export default Cart