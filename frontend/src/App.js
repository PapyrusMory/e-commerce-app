import React from 'react'
import data from './data'

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='/'>
            amazona
          </a>
        </div>
        <div>
          <a href='/cart'>Cart</a>
          <a href='/signin'>Sigin In</a>
        </div>
      </header>
      <main>
        <div className='row center'>
          {data.produits.map((produit) => {
            return (
              <div key={produit._id} className='card'>
                <a href={`/product/${produit._id}`}>
                  <img
                    className='medium'
                    src={produit.image}
                    alt={produit.name}
                  />
                </a>
                <div className='card-body'>
                  <a href={`/product/${produit._id}`}> {produit.name} </a>
                  <div className='rating'>
                    <span>
                      <i className='fa fa-star'></i>
                    </span>
                    <span>
                      <i className='fa fa-star'></i>
                    </span>
                    <span>
                      <i className='fa fa-star'></i>
                    </span>
                    <span>
                      <i className='fa fa-star'></i>
                    </span>
                    <span>
                      <i className='fa fa-star'></i>
                    </span>
                  </div>
                  <div className='price'>$ {produit.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  )
}

export default App
