import { useState } from 'react';

export default function ItemCount({stock, initial, onAdd}){

    let [count, setCount] = useState(parseInt(initial))

    const agregarItem = () =>{
       count === stock ? alert('No hay más stock')  : setCount(count + 1)
    }

    const eliminarItem = ()=>{
        count === 0 ? alert('No hay productos')  : setCount(count - 1)
    }

    const agregarCarrito = ()=>{
        onAdd(count)
    }

    if(count > parseInt(stock)){
        document.getElementById('botonSuma').onclick(alert('No hay más stock!'))
    }
    else if(count < 0){
        count = 1
    }

    return(
        <>
            <div className='btnContadorContainer'>
                <div className='contador'>
                    <button onClick= {eliminarItem} id='botonResta' className='resta btn btn-warning'>-</button>
                    <p>{count}</p>
                    <button onClick= {agregarItem} id='botonSuma' className='suma btn btn-warning'>+</button>
                </div>
                <div>
                    <button onClick={agregarCarrito} id="addToCart" className='btn btn-success'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}