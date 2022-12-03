import { Route, Routes } from "react-router-dom";
import {Home, Dashboard, PageError} from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsProvider from "../context/ProductsProvider.component";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/dashboard" element={<ProductsProvider><Dashboard/></ProductsProvider>}/>
            
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}