import React, { useEffect } from "react";
import { toast } from "react-toastify";

const UserTable = ({ user, i, refetch }) => {
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to make admin.`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          return toast.success(`User is now admin.`);
        }
      });
  };
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
        refetch();
        return toast.success(`${user?.name} is removed.`);
      });
  };
  return (
    <tr>
      <th>
        <label>{i + 1}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`https://api.lorem.space/image/face?hash=${
                  Math.floor(Math.random() * 10000) + 1
                }`}
                alt="user"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        {user.email}
        <br />
      </td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <button
            disabled
            onClick={makeAdmin}
            className="btn btn-xs btn-success"
          >
            Admin
          </button>
        )}
      </td>
      <th>
        <button className="btn btn-xs" onClick={removeAdmin}>
          Remove Admin
        </button>
      </th>
    </tr>
  );
};

export default UserTable;
