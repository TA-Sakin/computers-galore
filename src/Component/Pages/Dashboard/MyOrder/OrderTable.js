import React from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ order, i, setCancelOrder }) => {
  const onClickCancel = () => {
    setCancelOrder(order);
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <div className="flex items-center space-x-3">
        <div className="avatar mt-2">
          <div className="mask mask-squircle w-12 h-12">
            <img className="bg-gray-200" src={order.image} alt="product" />
          </div>
        </div>
        <div>
          <div className="font-bold">{order.product}</div>
        </div>
      </div>
      <td>${order.price}</td>
      <td>{order.ordered_quantity}</td>
      <td>
        {order.paid ? (
          <label htmlFor="my-modal-6">
            Transaction Id:
            <span className="text-green-600 "> {order.transactionId}</span>
          </label>
        ) : (
          <label
            htmlFor="my-modal-6"
            className="btn btn-warning btn-sm"
            onClick={onClickCancel}
          >
            Cancel
          </label>
        )}
      </td>
      <td>
        {order.paid ? (
          <p className="btn btn-success btn-sm cursor-auto">paid</p>
        ) : (
          <Link to={`payment/${order._id}`} className="btn btn-info btn-sm">
            Pay
          </Link>
        )}
      </td>
    </tr>
  );
};

export default OrderTable;
