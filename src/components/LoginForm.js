import { useFormik } from "formik";
import { useState } from "react";
import { signinSchema, signupSchema } from "../utils/formValidationSchema";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const { handleChange, handleBlur, handleSubmit, touched, values, errors } = useFormik({
    initialValues: isSignInForm
      ? { email: "", password: "" }
      : { name: "", email: "", password: "", confirm_password: "" },
    validationSchema: isSignInForm ? signinSchema : signupSchema,
    enableReinitialize: true,
    onSubmit: (values,action) => {
      if(isSignInForm){
        //sign in logic goes here
      }
      else{
        //signup logic goes here
      }
    },
  });

  return (
    <div id="loginForm" className="relative flex justify-center items-center min-h-screen">
      <form className="p-8 w-full max-w-md bg-black bg-opacity-80 text-white rounded-md" onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div>
          {!isSignInForm && (
            <>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="block w-full p-4 my-4 bg-gray-800"
                value={values.name || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <p className="text-red-700 font-bold">{errors.name}</p>}
            </>
          )}
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="block w-full p-4 my-4 bg-gray-800"
            value={values.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <p className="text-red-700 font-bold">{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="block w-full p-4 my-4 bg-gray-800"
            value={values.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <p className="text-red-700 font-bold">{errors.password}</p>}
        </div>
        <div>
          {!isSignInForm && (
            <>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                className="block w-full p-4 my-4 bg-gray-800"
                value={values.confirm_password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirm_password && errors.confirm_password && <p className="text-red-700 font-bold">{errors.confirm_password}</p>}
            </>
          )}
        </div>
        <div>
          <button type="submit" className="block w-full p-4 my-6 rounded-md bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p className="py-2 font-semibold cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Existing User? Log In Now"}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
