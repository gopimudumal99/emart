import React, { useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from './../redux/action/index';
import { useParams,Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';



const Product = () => {
    const { id } = useParams()
    const [product,setProduct] = useState("")
    const [loading, setLoading] = useState(false)

  const dispacth = useDispatch()

  const addProduct = (product) => {
    dispacth(addCart(product))
  }
  
    useEffect(() => { 
        const getProduct = async () => { 
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            console.log(res)
            setProduct(await res.json());
            setLoading(false)
        }
        getProduct();
    },[])

    const Loading = () => { 
        return (
          <>
            <div className="col-md-6">
              <Skeleton height={400} />
            </div>
            <div className="col-md-6" style={{ lineHieght: 1 }}>
              <Skeleton height={50} width={300} />
              <Skeleton height={75} />
              <Skeleton height={25} width={150} />
              {/* <Skeleton height={30} /> */}
              <Skeleton width={150} height={50} />
              <Skeleton height={150} width={600} />
              <div className='d-flex'>
              <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
              <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
              </div>
            </div>
          </>
        );
    }
    const ShowProduct = () => { 

        return (
          <>
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bold">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-start"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
              <Link to="/cart" className="btn btn-dark ms-2 px-4 py-2">Go to Cart</Link>
            </div>
          </>
        );
    }
  return (
      <div>
          <div className="container py-5">
              <div className="row py-4">
                  {loading ? <Loading /> : <ShowProduct />}
              </div>
          </div>
    </div>
  )
}

export default Product