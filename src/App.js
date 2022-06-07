import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <ItemListContainer texto='Bienvenidos!' />
        <ItemListContainer texto='La tienda estará disponible pronto.' />
      </main>
    </>
  );
}

export default App;
