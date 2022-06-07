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
        
      </main>
    </>
  );
}

export default App;
