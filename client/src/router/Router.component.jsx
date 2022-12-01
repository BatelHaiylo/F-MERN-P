import { Route, Routes } from "react-router-dom";
import {Home, PageError} from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothesProvider from "../context/ClothesProvider.component";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/clothes" element={
                <ClothesProvider><Clothes/></ClothesProvider>
            }/> */}
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}