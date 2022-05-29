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
import MyOrder from "./Component/Pages/Dashboard/MyOrder";
import AddProduct from "./Component/Pages/Dashboard/AddProduct";
import MyProfile from "./Component/Pages/Dashboard/MyProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
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
          <Route path="addprodcut" element={<AddProduct></AddProduct>}></Route>
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
