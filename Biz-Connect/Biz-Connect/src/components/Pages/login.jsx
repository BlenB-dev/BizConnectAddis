import React from "react";

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖️
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-black mb-4">Sign In</h2>

        {/* Social login buttons */}
        <div>
          <button className="w-full bg-gray-100 text-black border p-2 rounded mb-4 flex justify-center">
            Continue with Google
          </button>
          <button className="w-full bg-gray-100 text-black border p-2 rounded mb-4 flex justify-center">
            Continue with LinkedIn
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="border-b w-full"></span>
          <span className="px-3 text-gray-400">Or</span>
          <span className="border-b w-full"></span>
        </div>

        {/* Form inputs */}
        <form>
          <input
            type="email"
            placeholder="Work email"
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded text-black"
          />

          {/* Checkbox and Forgot Password */}
          <div className="flex justify-between items-center mb-4 text-black">
            <div>
              <input type="checkbox" id="stayLoggedIn" className="mr-2" />
              <label htmlFor="stayLoggedIn">Stay logged in</label>
            </div>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>

          {/* Submit button */}
          <button className="w-full bg-red-500 text-white py-2 rounded">
            Sign In
          </button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Have an account?
            <button className="text-blue-500 font-bold hover:underline cursor-pointer">
              SingUp
            </button>
          </p>
        </form>

        {/* Terms and Privacy */}
        <p className="mt-4 text-center text-sm text-black">
          By continuing, you agree to Clutch’s
          <a href="#" className="text-blue-500">
            {" "}
            Terms of Use{" "}
          </a>
          and
          <a href="#" className="text-blue-500">
            {" "}
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
