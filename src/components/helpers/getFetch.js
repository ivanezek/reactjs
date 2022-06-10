
let productos = [
   { id: '1' ,categoria: 'juego', name: "Resident Evil 7", price: 37, img: '../../assets/img/re7.jpg' },
   { id: '2' ,categoria: 'juego', name: "Red Dead Redemption", price: 27, img: '../../assets/img/rdr.jpg'},
   { id: '3' ,categoria: 'juego', name: "UFC 3", price: 40, img: '../../assets/img/ufc3.jpg'  },
];

export const getFetch = (id) =>{    
   return new Promise( (resolve, reject)=>{   
       setTimeout(()=>{
           if (id) {
               resolve(productos.find(prod => prod.id === id))              
           } else {
               resolve(productos)          
           }
       },2000)    
         reject(console.log('Error 404'))    
   },)
}  

export default getFetch
