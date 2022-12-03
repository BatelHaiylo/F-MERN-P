import React, { useContext } from 'react';
import {productsContext} from '../../../context/ProductsProvider.component';
import ProductsCard from '../../features/products/ProductsCard.component';

export default function Dashboard() {
  const {products} = useContext(productsContext)

  return (
    <>
    <br/>
  <ProductsCard key={products._id} items={products}/>
    </>
  )
};