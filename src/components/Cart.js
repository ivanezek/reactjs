import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
function Cart(){
  
  const {cartList, EmptyCart, PriceTotal} = useContext(CartContext)

  
async function CartOrder(e){
  e.preventDefault()
  let order = {}

  order.buyer = {name: 'ivan', email: 'ivan@gmail.com', phoneNumber: '112345678'}
  order.total = PriceTotal()

  order.productos = cartList.map(cartItem => {
    const id = cartItem.producto.id
    const name = cartItem.producto.name
    const cant = cartItem.cant
    const price = cartItem.producto.price * cartItem.cant 

    return {id, name, price, cant}
  })
  console.log(order)

  const db = getFirestore()
  const orderCollection = collection(db, 'orders')
  addDoc(orderCollection, order)
  
  // actualizacion stock

  const queryCollectionStock = collection(db, 'items')

  const queryUpdateStock =  query(
    queryCollectionStock, where(documentId(), 'in', cartList.map(producto => producto.id) )
  )

  const batch = writeBatch(db)

  await getDocs(queryUpdateStock)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    stock: res.data().stock - cartList.find(producto => producto.id === res.id).cant
  })))
  .finally(() => alert('Compra realizada'))

  batch.commit()
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