import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from './helpers/getFetch';
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()
    

   useEffect(() => {
        if(categoriaId){
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryCollectionFilter = query(queryCollection, where( 'descripcion', '==', categoriaId ))
            getDocs(queryCollectionFilter)
            .then(data => setProductos(data.docs.map(producto =>({id: producto.id, ...producto.data()}))) )
            .catch(err => console.log(err))
        }
        else{
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(data => setProductos(data.docs.map(producto =>({id: producto.id, ...producto.data()}))) )
            .catch(err => console.log(err))
        }
    }, [categoriaId])   

    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                setLoading(false)
        })
        .catch(err => console.log(err))
    })



    return (
        <div className='menuItemList'>
            { loading ? 
            <h1>Cargando...</h1>            
            :
            <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer

/*     useEffect(()=>{
        if(categoriaId){
        getFetch()
        .then((resp)=> {
             setProductos(resp.filter(productos => productos.descripcion === categoriaId))
        })
        .catch(err => console.log(err))
        }else{
        getFetch()
        .then((resp)=> {
            setProductos(resp)
        })
        .catch(err => console.log(err))
        }
        // se pasa dentro de los corchetes el categoriaId para que refresque el componente segun el parametro
    }, [categoriaId])  */