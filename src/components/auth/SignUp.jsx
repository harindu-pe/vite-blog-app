import React from "react";
import { NavLink } from "react-router-dom";
import { SIGNIN } from "../../config/routes";

export default function SignUp() {
  return (
    <section className="h-[calc(100vh-74px)] flex flex-col justify-center p-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-xl leading-9 tracking-tight text-gray-900 font-bold">
          Make a new account!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <NavLink
            to={SIGNIN}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In!
          </NavLink>
        </p>

        <div className="mt-5 text-center text-lg text-red-600"></div>
      </div>
    </section>
  );
}
