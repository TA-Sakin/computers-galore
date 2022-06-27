import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const ManageOrderTable = ({ order, refetch, i }) => {
  // const [delivered, setDelivered] = useState(true);
  const {
    shipped,
    _id,
    username,
    phone,
    paid,
    address,
    product,
    ordered_quantity,
    price,
  } = order;

  const handleShipment = (e) => {
    e.preventDefault();
    const delivered = {
      delivered: !shipped,
    };
    fetch(`https://stark-caverns-79279.herokuapp.com/manageorder/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(delivered),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{username}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{product}</td>
      <td>{ordered_quantity}</td>
      <td>${price}</td>
      <td>
        {paid ? (
          <button className="btn btn-xs btn-success cursor-auto">Paid</button>
        ) : (
          <button className="btn btn-xs btn-error cursor-auto">Unpaid</button>
        )}
      </td>
      <td>
        {shipped ? (
          <button onClick={handleShipment} className="btn btn-xs btn-success">
            Shipped
          </button>
        ) : (
          <button onClick={handleShipment} className="btn btn-xs btn-error">
            Unshipped
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderTable;
