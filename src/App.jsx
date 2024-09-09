import LayOut from "./components/root/LayOut";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home"
import Shop from "./pages/Shop"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";


function App() {
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<LayOut/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/newArrival/:id" element={<ProductsDetails/>}></Route>
    <Route path="/bestSellers/:id" element={<ProductsDetails/>}></Route>
    <Route path="/specialOffers/:id" element={<ProductsDetails/>}></Route>
    <Route path="/Shop" element={<Shop/>}></Route>
    <Route path="/Shop/:id" element={<ProductsDetails/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Journal" element={<Journal/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>
  </Route>
))
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
