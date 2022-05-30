import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useTools from "../../../hooks/useTools";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOrders(data);
        });
    }
  }, [email, user]);
  return (
    <div>
      <h3 className="text-xl mt-5 mb-3">
        You have ordered {orders.length} {orders.length > 1 ? "items" : "item"}.
      </h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>
                Price <span className="lowercase">/pc</span>
              </th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{order.product}</td>
                <td>${order.price}</td>
                <td>{order.ordered_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
