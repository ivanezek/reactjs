import { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import ItemCount from "./ItemCount";

function ItemDetail ({producto}){

  const {addToCart} = useContext(CartContext)

  const onAdd = (cant) => {
    addToCart(producto, cant);
    }

  return (
    <div className="container item-detail">
      <div className="row">
        <div className="col detail-img">
            <img src={'/'+producto.img} alt={producto.img} />
        </div>
        <div className="col">
            <h2>Nombre: {producto.name}</h2>
            <h5>Precio: {producto.price} ARS</h5>
            <ItemCount stock={producto.stock} initial='1' onAdd={onAdd} />
        </div>
      </div>
    </div>

  )
}

export default ItemDetail