import {createContext,useState,useEffect} from 'react'
import {getAllClothes} from '../service/clothes-rest'

export const clothesContext = createContext()

export default function ClothesProvider({children}){
    const [clothes,setClothes] = useState([])
    useEffect(()=>{getAllClothes().then(res => setClothes(res))},[])

    return(
        <clothesContext.Provider value={{clothes,setClothes}}>
            {children}
        </clothesContext.Provider>
    )
}