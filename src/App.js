import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./Component/Orders/Orders";
import Inventory from "./Component/Inventory/Inventory";
import About from "./Component/About/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
