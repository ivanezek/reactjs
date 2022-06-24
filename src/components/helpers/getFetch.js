let productos = [
    {
      id: '1',
      name: 'Resident Evil 7',
      descripcion: 'terror',
      stock: 5,
      img: 'assets/img/re7.jpg',
      price: 6400
    },
    {
      id: '2',
      name: 'Red dead Redemption',
      descripcion: 'accion',
      stock: 5,
      img: 'assets/img/rdr.jpg',
      price: 4700
    },
    {
      id: '3',
      name: 'UFC 3',
      descripcion: 'Pelea',
      stock: 5,
      img: 'assets/img/ufc3.jpg',
      price: 2700
    },
    {
      id: '4',
      name: 'FIFA 22',
      descripcion: 'deportes',
      stock: 4,
      img: 'assets/img/fifa.jpg',
      price: 8000
    },
  ];

export const getFetch = () =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(productos)   
        },2000)     
    })
}  



