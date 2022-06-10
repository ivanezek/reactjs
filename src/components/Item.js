import { useState, useEffect } from 'react'
import { getFetch } from './helpers/getFetch'

const Item = ({prod}) => {
    const [productos, setProductos] = useState([])
    useEffect( () => {
        getFetch(setProductos, "1")
    }, []);
    return (
        <div className='col-md-4 p-1'>                    
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.img} alt='' className='w-50' />
                    {prod.stock}                                                            
                </div>
                <div className="card-footer">  
                    <button className="btn btn-outline-primary btn-block">
                        Detalle
                    </button>                
                </div>
            </div>                                                                                                                            
        </div>
    )
}

export default Item
