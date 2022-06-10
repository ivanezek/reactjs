import { useEffect, useState } from "react";
import { getFetch } from "../components/helpers/getFetch";
import ItemCount from './ItemCount'



const ItemListContainer = () => {

        const onAdd = (cant) => {
        console.log(cant);
    }
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{
        getFetch()// llamada a la api
        .then((resp)=> {
                setProductos(resp)
                setLoading(false)
        })
        .catch(err => console.log(err))
        // .finally(()=> )
    }, [])

    console.log(productos)

    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :
                productos.map(prod => <div className='col-md-4 p-1'key={prod.id}>                        
                                                <div className="card w-100 mt-5" >
                                                    <div className="card-header">
                                                        {`${prod.nombre} - ${prod.descripcion}`}
                                                    </div>
                                                    <div className="card-body">
                                                        { <img src={prod.img} alt='' className='w-50' />}
                                                        {prod.stock}                                                            
                                                    </div>
                                                    <div className="card-footer">  
                                                        <button className="btn btn-outline-primary btn-block">
                                                            detalle del producto
                                                        </button>                
                                                    </div>
                                                </div>
                                                                                                                                
                                            </div>

                ) }

            <ItemCount stock= '10' initial='1' onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
















        // <div            
        //     className='col-md-4 p-1'                                                
        // >                        
        //     <Link to={`/detalle/${prod.id}`}>
        //         <div className="card w-100 mt-5" >
        //             <div className="card-header">
        //                 {`${prod.name} - ${prod.categoria}`}
        //             </div>
        //             <div className="card-body">
        //                 <img src={prod.foto} alt='' className='w-50' />
        //                 {prod.price}                                                            
        //             </div>
        //             <div className="card-footer">  
        //                 <button className="btn btn-outline-primary btn-block">
        //                     detalle del producto
        //                 </button>                
        //             </div>
        //         </div>
        //     </Link>                                                                                
        // </div>
