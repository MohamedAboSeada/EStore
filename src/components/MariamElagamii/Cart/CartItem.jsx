import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr>
      <td scope="row">
        <button
          className="btn btn-outline-danger"
          onClick={() => onRemove(item.id)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        {item.name}
      </td>
      <td>${item.price}</td>
      <td>
        <div className="qunt d-flex align-items-center justify-content-between form-control">
          <button
            className="btn"
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <input
            type="text"
            className="mx-2 text-center"
            style={{ width: "40px" }}
            value={item.quantity}
            readOnly
          />
          <button
            className="btn"
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </td>
      <td className="px-4">${item.price * item.quantity}</td>
    </tr>
  );
};

export default CartItem;
