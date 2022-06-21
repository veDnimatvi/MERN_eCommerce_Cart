import React from "react";
import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

import CartItem from "./CartItem";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }
  const removeHander = (id) => {
    dispatch(removeFromCart(id))
  }
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }
  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.qty * item.price) + price, 0)
  }
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHander={removeHander}/>)
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkoi</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
