import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import ItemCount from "./ItemCount";

function ItemDetail ({producto}){
  const [cantidad] = useState()

  const {addToCart} = useContext(CartContext)

  const onAdd = (cant) => {
    addToCart(producto, cant);
    }

  return (
    <div className="row">
    <div className="col-md-6">
        <img src={producto.img} alt={producto.img} />
    </div>
    <div className="col-md-6">
        <h2>Nombre: {producto.name}</h2>
        <h3>Tipo: {producto.descripcion}</h3>
        <h4>Stock: {producto.stock}</h4>
        <h5>Precio: {producto.price} ARS</h5>
        {
          cantidad ? 
          <Link to="/cart"><button className="btn btn-outline-primary">Comprar</button></Link>
          :
          <ItemCount stock={producto.stock} initial='1' onAdd={onAdd} />
        }

    </div>
</div>
  )
}

export default ItemDetail