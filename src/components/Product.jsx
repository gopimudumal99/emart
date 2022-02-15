import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const { id } = useParams
    const [product,setProduct] = useState("")
    const [loading, setLoading] = useState(false)
    
    useEffect(() => { 
        const getProduct = async () => { 
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    },[])

    const Loading = () => { 
        return (<>
            Loding....
        </>)
    }
    const ShowProduct = () => { 
        return (<>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} width="400px" height="400px" />
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bold' >
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-start'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                <p className="lead">{ product.description}</p>
                <button className='btn btn-dark'>Go to Cart</button>
        </div>
        </>)
    }
  return (
      <div>
          <div className="container">
              <div className="row">
                  {loading} ? <Loading/>:<ShowProduct/>
              </div>
          </div>
    </div>
  )
}

export default Product