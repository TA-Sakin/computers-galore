import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import OrderTable from "./MangeOrderTable";
import { useQuery } from "react-query";
import ManageOrderTable from "./MangeOrderTable";
import Loading from "../../../Shared/Loading";

const ManageOrders = () => {
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://stark-caverns-79279.herokuapp.com/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-xl my-3">There are {orders?.length} orders.</h3>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th className="">Address</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Shipment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <ManageOrderTable
                key={order._id}
                i={i}
                order={order}
                refetch={refetch}
              ></ManageOrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
