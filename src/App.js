import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import RequireAuth from "./Component/Pages/Login/RequireAuth";
import Signup from "./Component/Pages/Login/Signup";
import Purchase from "./Component/Pages/Purchase/Purchase";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
