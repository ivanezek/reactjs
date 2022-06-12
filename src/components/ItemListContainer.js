import { useEffect, useState } from 'react';
import { getFetch } from './helpers/getFetch';
import ItemCount from './ItemCount'
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const onAdd = (cant) => {
    console.log(cant);
    }
    const [loading, setLoading] = useState(true)

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
            <ItemList/>
            }
            <ItemCount stock= '10' initial='1' onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer