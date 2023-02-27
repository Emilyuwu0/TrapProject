import React from 'react'
import "../styles/products.css"
export default function Product({product, handleAddToCart}) {
  return (
    <div className=" Products-item
    ">
      <img src={product.image} alt={product.title}/>
      <div className="Products-item-info">

    <h2>{product.title}</h2>
    <span> ${product.price}</span>
    <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>comprar uwu</button>
    </div>
  )
}
