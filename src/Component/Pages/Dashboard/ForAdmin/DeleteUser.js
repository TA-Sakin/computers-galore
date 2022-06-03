import React from "react";
import { toast } from "react-toastify";

const DeleteUser = ({ deleteUser, refetch, setDeleteUser }) => {
  const { _id } = deleteUser;
  const removeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`User is removed.`);
        setDeleteUser(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the product?
          </h3>
          <div className="modal-action">
            <button
              onClick={removeAdmin}
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

export default DeleteUser;
