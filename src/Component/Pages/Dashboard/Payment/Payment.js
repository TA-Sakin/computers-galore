import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2z9nA8mAYRnufV6enLNxSybFkj6WJCwGw6g0QcLmR6Z7Q1OlSk2ixL1ELYZVdw6GORobYk1h20VfMlbiBgqDVm00IMEqc2ic"
);
const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  let total;
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [id]);
  if (order) {
    total =
      parseInt(order?.price) * order?.ordered_quantity * 0.1 +
      parseInt(order?.price) * order?.ordered_quantity;
  }
  //   const { data: order, isLoading } = useQuery(["order", id], () => {
  //     fetch(`http://localhost:5000/order/${id}`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }).then((res) => res.json());
  //   });
  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }
  return (
    <div>
      <div className="mt-10">
        <p className="text-2xl font-bold">
          Payment for <span className="text-cyan-400">{order?.product}</span>{" "}
        </p>
        <div className="overflow-x-auto my-5">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Ordered Quantity:</th>
                <th>{order?.ordered_quantity}</th>
                <th></th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Price(per piece):</th>
                <th>${order?.price}</th>
                <th></th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Tax:</th>
                <th>10%</th>
                <th></th>
              </tr>
            </thead>
            <div className="underline"></div>
            <tr>
              <th>Total:</th>
              <th>${total}</th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
      <div className="card w-96 bg-base-100 mt-5 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} total={total} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
