import { createContext, useState } from "react"

export const CartContext = createContext([])



const CartContextProvider = ({children}) => {
  
  const [cartList, setCartList] = useState([])

  const addToCart = (producto, cant) =>{
    if(IsInCart(producto.id)){
      console.log(cartList)
      const addProductoExtra = cartList.find( cl => cl.producto.id === producto.id )
      console.log(addProductoExtra)
      addProductoExtra.cant += cant

      const newArray = cartList.filter(cl => cl.producto.id !== producto.id)
      setCartList([...newArray, addProductoExtra])
    }else{
      setCartList([...cartList, {producto, cant}])
      alert('El producto se ha agregado correctamente.')
    }
  }

  const IsInCart = (id) =>{
    return cartList.some((i) => i.producto.id === id)
  }

  const EmptyCart = () =>{
    setCartList([])
  }
  
const DeleteItem = (id) =>{
  const items = cartList.filter((product) => product.producto.id !== id)
  setCartList(items)
}

const IconCart = () =>{
  return cartList.reduce((acum, i) => acum + i.cant, 0)
}

const PriceTotal = () =>{
  return cartList.reduce((acum, product) => acum + product.cant * product.producto.price, 0)
}


  return (
    <CartContext.Provider value={{addToCart, cartList, EmptyCart, DeleteItem, PriceTotal, IconCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider