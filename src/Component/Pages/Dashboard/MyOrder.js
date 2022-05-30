import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useTools from "../../../hooks/useTools";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user?.email;
  useEffect(() => {
    if (user) {
      fetch(`https://stark-caverns-79279.herokuapp.com/order?email=${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          } else if (res.status === 403) {
            navigate("/");
            return toast.error("Error authorizing, please try login again!");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [email, user, navigate]);
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
              <th>Payment</th>
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
