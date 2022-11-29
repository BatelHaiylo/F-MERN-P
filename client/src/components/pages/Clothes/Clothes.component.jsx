import React, { useContext } from "react";
import Card from '../../features/Card/Card.compponent';
import {clothesContext} from '../../../context/ClothesProvider.component'

export default function Clothes() {
  const {clothes,setClothes} = useContext(clothesContext)
  return (
    <>
      <div>Clothes</div>
      {console.log(clothes)}


    </>
  );
}
