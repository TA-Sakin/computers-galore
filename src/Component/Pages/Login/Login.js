import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  let signInError;
  // const [token] = useToken(user || guser);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user || guser);
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, guser, from, navigate, token]);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (loading || gloading) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    setEmail(data.email);
    await signInWithEmailAndPassword(data.email, data.password);
  };
  const passwordReset = async () => {
    await sendPasswordResetEmail(email);
  };
  if (error || gerror || passwordError) {
    signInError = (
      <p className="text-red-500 capitalize">
        {error?.message.split("/").pop().replace(")", "") ||
          passwordError?.message.split("/").pop().replace(")", "") ||
          gerror?.message.split("/").pop().replace(")", "")}
      </p>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center">
        <div className="card w-96 md:w-[400px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered w-full max-w-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <span>
                <Link
                  to=""
                  className="font-bold text-sm link link-hover mb-8 label w-1/2 cursor-pointer"
                  onClick={passwordReset}
                >
                  Forgot password?
                </Link>
              </span>
              {signInError}
              <input
                className="btn bg-black rounded-none w-full max-w-sm"
                value="Login"
                type="submit"
              />
            </form>
            <p className="text-center">
              Don't have an account?
              <Link
                to="/signup"
                className="text-primary text-sm hover:text-indigo-900"
              >
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-[#89d6fb]"
            >
              <FcGoogle className="text-2xl mr-2" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
