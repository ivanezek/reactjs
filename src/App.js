import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContextProvider from './components/CartContextProvider';

function App() {
  
  
  return (
    <CartContextProvider>
    <BrowserRouter>
      <header>
        <Menu/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer texto='Bienvenidos!'/>}/>
          <Route path='/category/:categoriaId' element={<ItemListContainer texto='Bienvenidos!'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
