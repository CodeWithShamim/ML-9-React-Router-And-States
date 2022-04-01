import {Route, Routes} from 'react-router-dom';
import './App.css';
import Item from './components/Item/Item';
import Grandpa from  './components/Grandpa/Grandpa'

function App() {
  return (
    <div className="App">
      <Item></Item>
      <Routes>
        <Route path='grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
     
  
    </div>
  );
}

export default App;
