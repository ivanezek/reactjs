import { Link } from "react-router-dom"


export const OrderCompleted = () => {
  return (
    <div className="order-completed">
        <p>Felicidades y muchas gracias por tu compra!</p>
        <button className="btn btn-warning"> <Link to='/'>Volver al inicio</Link> </button>
    </div>
  )
}
