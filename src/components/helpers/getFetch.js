let productos = [
    {
      id: '1',
      name: 'Resident Evil 7',
      descripcion: 'Village',
      stock: 5,
      img: '/src/assets/img/re7.jpg',
    },
    {
      id: '2',
      name: 'Red dead Redemption',
      descripcion: '2014',
      stock: 5,
      img: '/src/assets/img/rdr.jpg',
    },
    {
      id: '3',
      name: 'UFC 3',
      descripcion: 'Pelea',
      stock: 5,
      img: '/src/assets/img/ufc3.jpg'
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
