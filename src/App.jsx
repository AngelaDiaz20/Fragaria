import './scss/styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import DetailsProducts from './pages/DetailsProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Productos" element={<Products/>}></Route>
      <Route path="Productos/detalle" element={<DetailsProducts/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
