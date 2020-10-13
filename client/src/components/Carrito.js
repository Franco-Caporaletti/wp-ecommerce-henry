import React, { useEffect, useState } from 'react';
import { addToCart, getProductFromCart, removeFromCart } from '../actions/CartActions';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsOfCart } from '../actions/addBasketAction';
import { Link } from 'react-router-dom';

function Carrito(props) {

  const dispatch = useDispatch();
  const carritoReducer = useSelector(state => state.cart.cartItems.products);
  const { loading, error, totalQuantity, totalPrice } = useSelector(state => state.cart);
  console.log('carritoReducer', carritoReducer);

  const productId = props.match.params.id;
  //const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;


  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  const checkoutHandler = () => {
    props.history.push();
  }

  const peticionAdd = async (item) => {
    await dispatch(addToCart(item))
    await dispatch(getProductFromCart())
  }

  const peticionSubstract = async () => {

  }

  const peticionDelete = async () => {

  }

  return (
    <>
      {loading ? (<div>Loading...</div>) : error ? (<div>No esta funcionando{error}</div>) : (
        <div className="cart">
          <div className="cart-list">
            <ul className="cart-list-container">
              <li>
                <h3>
                  Carrito
                </h3>
                <div>
                  <h3>Precio</h3>
                </div>
              </li>
              {!carritoReducer ? <div> El Carrito está vacio </div> :
                carritoReducer[0].products.map(item => (
                  <div key={item.id}>
                    <li>
                      <div className="cart-image">
                        <img src={`http://localhost:3001/static/${item.image}`} alt="product" />
                      </div>

                      <div className="cart-name">
                        <div>
                          <Link to={'/products/' + item.id}>
                            {item.name}
                          </Link>
                        </div>
                        <br />
                        <div>
                          {item.description}
                        </div>
                        <div className="cart-quantity">
                          Cantidad: {item.orderline.quantity}
                        </div>
                        <br />
                        <i class="fas fa-plus-circle" onClick={() => { peticionAdd(item) }}></i> {"  "}
                        <i class="fas fa-minus-circle" onClick={() => { console.log('restar 1', item.id) }}></i> {"  "}
                        <i class="far fa-trash-alt delete-cart" onClick={() => { console.log('eliminar', item.id) }}></i>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  </div>
                )
                )
              }
            </ul>
          </div>
          <div className="cart-action" >
            <div style={{ justifyContent: "center" }}>
              <h3>
                Total: {totalQuantity}(items)
              </h3>
              <h3>
                Precio: $ {totalPrice}
              </h3>
              <Link to="/checkout">
                <button onClick={checkoutHandler} className="btn btn-success">
                  Comprar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Carrito;

//!carritoReducer ? 'el carro esta vacio' : 'tiene valor', console.log('carritoReducer',carritoReducer[0])