import { Route, Routes } from "react-router-dom";
import {Home, PageError} from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}