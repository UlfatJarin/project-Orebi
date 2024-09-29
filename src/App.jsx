import './App.css'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './page/Home';
import Products from './page/Products';
import SignIn from './page/SignIn';
import Login from './page/Login';
import ProductDetails from './page/ProductDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />} >
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/shop' element={<Products/>} > </Route>
      <Route path='/sign/up' element={<SignIn/>} > </Route>
      <Route path='/Login' element={<Login/>} > </Route>
      <Route path='/products' element={<ProductDetails/>} > </Route>
    </Route>
  )
);

function App() {

  return (
  <RouterProvider router={router}/>
  
  )
}

export default App
