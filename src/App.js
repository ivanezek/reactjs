import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer texto='Bienvenidos!' />
        <ItemListContainer texto='La tienda estará disponible pronto.' />
      </main>
    </>
  );
}

export default App;
