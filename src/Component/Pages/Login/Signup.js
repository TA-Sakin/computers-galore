import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  sendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";

const Signup = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInError;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (loading || gloading || updating) {
    return <Loading></Loading>;
  }
  if (user || guser) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // await updateProfile({ displayName: data.name });
  };
  if (error || gerror || updateError) {
    signInError = (
      <p className="text-red-500 capitalize">
        {error?.message.split("/").pop().replace(")", "") ||
          updateError?.message.split("/").pop().replace(")", "") ||
          gerror?.message.split("/").pop().replace(")", "")}
      </p>
    );
  }
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center">
        <div className="card w-96 md:w-[400px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-sm"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
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
                      message: "email is required",
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
              <div className="form-control mb-8 w-full max-w-sm">
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
                    pattern: {
                      value: /(?=.*[!@#$%^&*])/,
                      message: "Must have a special character",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {signInError}
              <input
                className="btn bg-black rounded-none w-full max-w-sm"
                value="Sign Up"
                type="submit"
              />
            </form>
            <p className="text-center">
              Already have an account?
              <Link
                to="/login"
                className="text-primary text-sm hover:text-indigo-900"
              >
                Login
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

export default Signup;
