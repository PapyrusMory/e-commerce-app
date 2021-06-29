import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './../components/Product'
import MessageBox from './../components/MessageBox'
import LoadingBox from './../components/LoadingBox'

export default function HomeScreen() {
  const [produits, setProduits] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('/api/products')
        setLoading(false)
        setProduits(data)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {produits.map((produit) => {
            return <Product key={produit._id} produit={produit} />
          })}
        </div>
      )}
    </div>
  )
}
