import ItemCount from './ItemCount'

const ItemListContainer = ({texto}) => {
    return (
        <>
        <h1>{texto}</h1>
        <ItemCount stock= '10' initial='1' />
        </>
    )
}

export default ItemListContainer