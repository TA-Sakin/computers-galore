import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import RequireAuth from "./Component/Pages/Login/RequireAuth";
import Signup from "./Component/Pages/Login/Signup";
import Purchase from "./Component/Pages/Purchase/Purchase";
import Navbar from "./Component/Shared/Navbar";
import NotFound from "./Component/Shared/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import AddReview from "./Component/Pages/Dashboard/AddReview";
import MyOrder from "./Component/Pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./Component/Pages/Dashboard/MyProfile";
import Payment from "./Component/Pages/Dashboard/Payment/Payment";
import AllUsers from "./Component/Pages/Dashboard/ForAdmin/AllUsers";
import ManageOrders from "./Component/Pages/Dashboard/ForAdmin/ManageOrders";
import RequireAdmin from "./Component/Pages/Login/RequireAdmin";
import ManageProducts from "./Component/Pages/Dashboard/ForAdmin/ManageProducts";
import AddProduct from "./Component/Pages/Dashboard/ForAdmin/AddProduct";
import AllTools from "./Component/Pages/Home/AllTools";
import EditProduct from "./Component/Pages/Dashboard/ForAdmin/EditProduct";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/alltools" element={<AllTools></AllTools>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route
            path="addprodcut"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="alluser"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts/edit"
            element={
              <RequireAdmin>
                <EditProduct></EditProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts/add"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="myorder/payment/:id"
            element={<Payment></Payment>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
