import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import RequireAuth from "./Component/Pages/Login/RequireAuth";
import Signup from "./Component/Pages/Login/Signup";
import Purchase from "./Component/Pages/Purchase/Purchase";
import Navbar from "./Component/Shared/Navbar";
import NotFound from "./Component/Shared/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
