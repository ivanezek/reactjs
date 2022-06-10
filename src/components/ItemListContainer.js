import { useEffect, useState } from "react";
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { getFetch } from "./helpers/getFetch";



const ItemListContainer = ({texto}) => {
    const onAdd = (cant) => {
        console.log(cant);
    }

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)   
   
    useEffect(()=>{
        getFetch()
        .then((resp)=> {
            setProductos(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(() => setLoading(false))
    }, [])


    return (
        <div>
            {loading ?
            <h1>{texto}</h1>
            :
            <div>
                <ItemCount stock= '10' initial='1' onAdd={onAdd} />
                <ItemList productos={productos}/>
            </div>
            }   
        </div>
    )
}

export default ItemListContainer