import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 24;
  const tax = 0.14 * subtotal;
  const total = subtotal - discount + tax;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 card p-0">
          <h3 className="fw-medium fs-5 p-4">Shopping Cart</h3>
          <table className="table ">
            <tr>
              <th className="ps-4" scope="col">
                Products
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th className="px-4" scope="col">
                Sub-total
              </th>
            </tr>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </tbody>
          </table>
          <div className="btn-div d-flex justify-content-between p-4">
            <button className="btn btn-outline-primary fw-semibold">
              <i className="fa-solid fa-arrow-left-long pe-2"></i>
              Return to Shop
            </button>
            <button className="btn btn-outline-primary fw-semibold">
              Update Cart
            </button>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title fw-medium fs-5">Card Totals</h5>
              <p className=" d-flex justify-content-between">
                <div className="text-black-50">Sub-total</div>
                <div className="fw-medium">${subtotal.toFixed(2)}</div>
              </p>
              <p className=" d-flex justify-content-between">
                <div className="text-black-50">Shipping</div>
                <div className="fw-medium">Free</div>
              </p>
              <p className=" d-flex justify-content-between">
                <div className="text-black-50">Discount</div>
                <div className="fw-medium">${discount.toFixed(2)}</div>
              </p>
              <p className=" d-flex justify-content-between">
                <div className="text-black-50">Tax</div>
                <div className="fw-medium">${tax.toFixed(2)}</div>
              </p>
              <hr className="m-0" />
              <h4 className="py-3 fw-medium d-flex justify-content-between">
                <div className="fs-6">Total</div>
                <div className="fs-5"> ${total.toFixed(2)}</div>
              </h4>
              <button className="btn btn-success btn-block fw-semibold">
                Proceed to Checkout
                <i className="fa-solid fa-arrow-right-long ps-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
