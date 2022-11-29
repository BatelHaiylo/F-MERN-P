import { Route, Routes } from "react-router-dom";
import {Home, Clothes, Shoes, Gear, Cart, Profile, PageError} from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothesProvider from "../context/ClothesProvider.component";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/clothes" element={
                <ClothesProvider><Clothes/></ClothesProvider>
            }/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/gear" element={<Gear/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}