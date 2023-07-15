// import logo from './logo.svg';
import "./App.css";

// import {Button} from 'react-bootstrap'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {AddProduct}  from "./components/AddProduct";
import { UpdateProduct } from "./components/UpdateProduct";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Protected } from "./components/Protected";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/add" element={<Protected Cmp={AddProduct}/>} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct}/>} />
          <Route path="/" element={<Protected Cmp={ProductList}/>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

//Github UserName : Parshuu-Hub
//Github Password : #P@rshuu007
