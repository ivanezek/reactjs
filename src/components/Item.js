import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <>
            <div className='col-md-4 p-1'key={prod.id}>                        
                <div className="card w-100 mt-5" >
                    <div className="card-body">
                        <img src={prod.img} alt={prod.img} className='product-image'/>
                        <h2 className="product-header">{`${prod.name}`}</h2>   
                        <p className="card-price">Precio: {prod.price} ARS</p>                                
                    </div>
                    <div className="card-footer">  
                        <button className="btn btn-warning"><Link to={`/item/${prod.id}`}>Detalle del producto</Link></button>                
                    </div>
                </div>                                                                                                                   
             </div>
            
        </>
    )
}

export default Item
