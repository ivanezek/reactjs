import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navBar'
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
