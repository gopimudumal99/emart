import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from '../redux/action';
import { addCart } from './../redux/action/index';

function Cart() {
    const data = useSelector((state) => state.handleCart);
    const dispacth = useDispatch();
    const handlebtnMinus = (product) => {
        if (product.qty === 1) { 
            alert("product is removed from the cart")
        }
        dispacth(deleteCart(product));
    }

    const handlebtnPlus = (product) => { 
        dispacth(addCart(product))
    }



    return data.length === 0 ? <h1 className='d-flex align-items-center justify-content-center py-5' >Cart is Empty</h1> : (
      <div>
          {data.map((x) => { 
              return (
                <div key={x.id} className="container py-4">
                  <div className="row py-1">
                    <div className="col-md-3">
                      <img src={x.image} alt={x.title} width="200px" />
                    </div>
                    <div className="col-md-6">
                      <h3>{x.title}</h3>
                      <p className="lead fw-bold">
                        {x.qty}X ${x.price} = ${x.price * x.qty}
                      </p>
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => handlebtnMinus(x)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => handlebtnPlus(x)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );

          }
          )}
    </div>
  )
}

export default Cart