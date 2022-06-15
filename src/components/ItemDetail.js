
function ItemDetail ({producto}){
  return (
    <div className="row">
    <div className="col-md-6">
        <img src={producto.img} alt={producto.img} />
    </div>
    <div className="col-md-6">
        <h2>Nombre: {producto.name}</h2>
        <h3>Tipo: {producto.descripcion}</h3>
        <h4>Stock: {producto.stock}</h4>
    </div>
</div>
  )
}

export default ItemDetail