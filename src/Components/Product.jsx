import React, { useEffect, useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const [data , setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:3004/productsInfo")
        .then((res) => res.json())
        .then((res) => setData(res))
    },[])


//     console.log(data)

  return (
    <div>
            <table>
                <thead>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>More...</th>
                </thead>
                {data.map((item) => (
                    <tbody key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={() => navigate(`/products/${item.id}`)} >More Details</button></td>
                    </tbody>
                ))}
            </table>
    </div>
  )
}

 export default Product

