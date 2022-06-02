import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ cancelOrder, refetch, setCancelOrder }) => {
  const { _id } = cancelOrder;
  const handleCancel = () => {
    fetch(`http://localhost:5000/deleteOrder/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Order canceled!");
          setCancelOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to cancel the order?
          </h3>
          <div className="modal-action">
            <button
              onClick={handleCancel}
              className="btn btn-warning btn-sm w-20"
            >
              Yes
            </button>
            <label htmlFor="my-modal-6" className="btn btn-sm w-20">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
