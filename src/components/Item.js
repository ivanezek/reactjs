import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <>
            <div className='col-md-4 p-1'key={prod.id}>                        
                <div className="card w-100 mt-5" >
                     <div className="card-header">
                        {`${prod.name} - ${prod.descripcion}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.img} alt={prod.img} className='w-50'/>
                        <p>Stock: {prod.stock}</p>                                                         
                    </div>
                    <div className="card-footer">  
                        <button className="btn btn-outline-primary btn-block"><Link to={`/item/${prod.id}`}>Detalle del producto</Link></button>                
                    </div>
                </div>                                                                                                                   
             </div>
            
        </>
    )
}

export default Item
