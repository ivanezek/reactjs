import { useEffect, useState } from 'react';
import { getFetch } from './helpers/getFetch';
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const onAdd = (cant) => {
    console.log(cant);
    }
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                //resultados guardados en useState
                setProductos(resp)
        })
        .catch(err => console.log(err))
        // .finally(()=> )
    }, [])

    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                setLoading(false)
        })
        .catch(err => console.log(err))
    })
    return (
        <div>
            { loading ? 
            <h1>Cargando...</h1>            
            :
            <ItemList productos={productos}/>
            }
            <ItemCount stock= '10' initial='1' onAdd={onAdd} />

            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer