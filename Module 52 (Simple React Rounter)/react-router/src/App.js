import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import DynamicPart from './components/DynamicPart/DynamicPart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about/result/:id' element={<DynamicPart></DynamicPart>}></Route>
        <Route path='/post' element={<Posts></Posts>}>
           <Route path=':postId' element={<PostDetails></PostDetails>}> </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
