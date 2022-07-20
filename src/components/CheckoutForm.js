import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";

export const CheckoutForm = () => {

  const {cartList, PriceTotal, EmptyCart} = useContext(CartContext)

  async function CartOrder(e){
    e.preventDefault()
    let order = {}
  
    order.buyer = {
      name: e.target.name.value,
      email: e.target.mail.value, 
      phoneNumber: e.target.phone.value
    }
    order.total = PriceTotal()

    order.productos = cartList.map(cartItem => {
      const id = cartItem.producto.id
      const name = cartItem.producto.name
      const cant = cartItem.cant
      const price = cartItem.producto.price * cartItem.cant 
  
      return {id, name, price, cant}
    })
  
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
    
  }

  return (
    <div className="checkout-form">
      <form onSubmit={CartOrder}>
        <h1>Complete los datos para finalizar la compra</h1>
        <input type="text" name="name" placeholder="Nombre" required></input>
        <input type="text" name="mail" placeholder="Email" required></input>
        <input type="text" name="phone" placeholder="Teléfono" required></input>
        <button type="submit" onClick={EmptyCart} > <Link to='/ordercompleted'>Comprar</Link> </button>
      </form>
    </div>
  )
}
