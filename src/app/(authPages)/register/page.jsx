import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="text-center ">
        <h1 className="text-3xl font-bold">Register now!</h1>
      </div>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="link link-hover text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
