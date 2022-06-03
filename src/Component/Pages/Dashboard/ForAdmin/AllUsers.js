import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading";
import DeleteUser from "./DeleteUser";

const AllUsers = () => {
  //   const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [deleteUser, setDeleteUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
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
  //   useEffect(() => {
  //     fetch("http://localhost:5000/users", {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setUsers(data);
  //       });
  //   }, []);
  return (
    <div>
      <h3 className="text-xl my-3">There are now {users?.length} users.</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <UserTable
                key={user._id}
                i={i}
                refetch={refetch}
                user={user}
                setDeleteUser={setDeleteUser}
              ></UserTable>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <DeleteUser
          setDeleteUser={setDeleteUser}
          deleteUser={deleteUser}
          refetch={refetch}
        ></DeleteUser>
      )}
    </div>
  );
};

export default AllUsers;
