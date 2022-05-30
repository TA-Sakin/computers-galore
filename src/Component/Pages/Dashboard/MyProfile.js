import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <h3>My profile </h3>
      <div className="m-5">
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
