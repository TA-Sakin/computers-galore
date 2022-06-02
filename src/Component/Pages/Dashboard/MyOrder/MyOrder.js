import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import useTools from "../../../../hooks/useTools";
import Loading from "../../../Shared/Loading";
import OrderTable from "../MyOrder/OrderTable";
import DeleteOrder from "../MyOrder/DeleteOrder";

const MyOrder = () => {
  const [cancelOrder, setCancelOrder] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://stark-caverns-79279.herokuapp.com/order?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      } else if (res.status === 403) {
        navigate("/");
        signOut(auth);
        localStorage.removeItem("accessToken");
        return toast.error("Error authorizing, please login again!");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-xl mt-5 mb-3">
        You have ordered {orders.length} {orders?.length > 1 ? "items" : "item"}
        .
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>
                Price <span className="lowercase">/pc</span>
              </th>
              <th>Quantity</th>
              <th>Manage order</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <OrderTable
                key={order._id}
                i={i}
                refetch={refetch}
                order={order}
                setCancelOrder={setCancelOrder}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
      {cancelOrder && (
        <DeleteOrder
          setCancelOrder={setCancelOrder}
          cancelOrder={cancelOrder}
          refetch={refetch}
        ></DeleteOrder>
      )}
    </div>
  );
};

export default MyOrder;
