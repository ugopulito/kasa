import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product';
import About from './pages/About';
import Error from './pages/Error';
import Layout from './pages/Layout';
import ScrollReset from './components/ScrollReset';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <ScrollReset/>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='logement/:id' element={<Product/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
