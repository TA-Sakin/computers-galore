import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="ml-3">
          <label htmlFor="dashboard-sidebar" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 text-purple-500 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <h3 className="text-3xl font-bold mt-5 text-purple-500">Dashboard</h3>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 cursor-pointer overflow-y-auto w-64 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin ? (
            <>
              <li>
                <Link to="/dashboard/myorder">My Order</Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/alluser">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageorder">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
