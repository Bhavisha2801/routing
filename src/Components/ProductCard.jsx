import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductCard = () => {

  const [single , setSingle] = useState({})

  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3004/productsInfo/${id}`)
    .then((res) => res.json())
    .then((res) => setSingle(res))
  },[])
 
  return (
    <div>
      <h3>{single.name}</h3>
      <h3>{single.price}</h3>
      <button onClick={() => navigate("/products")}>Go Back</button>
    </div>
  )
}

export default ProductCard