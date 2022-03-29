import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
       <Home></Home>
       <Products></Products>
       <About></About>
    </div>
  );
}

export default App;
