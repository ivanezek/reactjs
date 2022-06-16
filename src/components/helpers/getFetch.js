let productos = [
    {
      id: '1',
      name: 'Resident Evil 7',
      descripcion: 'terror',
      stock: 5,
      img: 'https://i.ibb.co/4VRzZNx/re7.jpg',
    },
    {
      id: '2',
      name: 'Red dead Redemption',
      descripcion: '2014',
      stock: 5,
      img: 'https://i.ibb.co/4mVNLcC/rdr.jpg',
    },
    {
      id: '3',
      name: 'UFC 3',
      descripcion: 'Pelea',
      stock: 5,
      img: 'https://i.ibb.co/Jc9139Q/ufc3.jpg'
    },
    {
      id: '4',
      name: 'FIFA 22',
      descripcion: 'futbol',
      stock: 4,
      img: 'https://i.ibb.co/8D977Py/fifa.jpg',
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



