import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setpassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const handleReset = async (e) => {
    e.preventDefault();
    // const resetData = {
    //   token,
    //   email,
    //   password,
    //   password_confirmation,
    // };
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#1E3E62] via-[#184E4E] to-black min-h-screen flex flex-col justify-center -mt-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Reset Password
        </h2>
        {/* <p className="mt-2 text-center text-sm text-gray-600">
          Please enter your registered email address to receive a verification
          link.
        </p> */}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleReset}>
            <div>
              <label
                htmlFor="regMail"
                className="block text-sm font-medium text-gray-700">
                Enter Your Password
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="regMail"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="regMail"
                className="block text-sm font-medium text-gray-700">
                Enter Your Confirm Password
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="regMail"
                  placeholder="Enter Your confirm Password"
                  value={password_confirmation}
                  onChange={(e) => setpassword_confirmation(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
