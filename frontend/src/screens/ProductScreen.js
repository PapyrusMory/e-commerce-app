import React from 'react'
import data from './../data'
import Rating from './../components/Rating'
import { Link } from 'react-router-dom'

export default function ProductScreen(props) {
  const produit = data.produits.find((x) => x._id === props.match.params.id)

  if (!produit) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <Link to='/'>Back to result</Link>
      <div className='row top'>
        <div className='col-2'>
          <img className='large' src={produit.image} alt={produit.name}></img>
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{produit.name}</h1>
            </li>
            <li>
              <Rating rating={produit.rating} numReviews={produit.numReviews} />
            </li>
            <li>Price: $ {produit.price}</li>
            <li>
              Description: <p>{produit.description}</p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>$ {produit.price}</div>
                </div>
              </li>

              <li>
                <div className='row'>
                  <div>Status</div>
                  <div>
                    {produit.countInStock > 0 ? (
                      <span className='success'>In Stock</span>
                    ) : (
                      <span className='error'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'> Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
