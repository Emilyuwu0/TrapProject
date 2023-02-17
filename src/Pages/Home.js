import React from 'react'
import InitialState from '../initialState'
import Products from "../components/Products";
export default function Home() {
  return (
    <div>
      <Products products={InitialState.products }/> aaa
    </div>
  )
}
