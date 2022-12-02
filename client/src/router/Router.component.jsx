import { Route, Routes } from "react-router-dom";
import {Home, PageError} from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersProvider from '../context/UsersProvider.component'

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={
                <ClothesProvider><Clothes/></ClothesProvider>
            }/>
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}