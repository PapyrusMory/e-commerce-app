import React from 'react'
import Rating from './Rating'

const Product = ({ produit }) => {
  return (
    <div key={produit._id} className='card'>
      <a href={`/product/${produit._id}`}>
        <img className='medium' src={produit.image} alt={produit.name} />
      </a>
      <div className='card-body'>
        <a href={`/product/${produit._id}`}> {produit.name} </a>
        <Rating rating={produit.rating} numReviews={produit.numReviews} />
        <div className='price'>$ {produit.price}</div>
      </div>
    </div>
  )
}

export default Product
