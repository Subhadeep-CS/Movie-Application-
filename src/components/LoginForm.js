import { useFormik } from "formik";
import { useState } from "react";
import { signinSchema, signupSchema } from "../utils/formValidationSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";
const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: isSignInForm
        ? { email: "", password: "" }
        : { name: "", email: "", password: "", confirm_password: "" },
      validationSchema: isSignInForm ? signinSchema : signupSchema,
      enableReinitialize: true,
      onSubmit: (values, action) => {
        if (isSignInForm) {
          const { email, password } = values;
          //sign in logic goes here
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              toast.success("Login Successfully");
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toast.error(errorMessage);
            });
        } else {
          //signup logic goes here
          const { name, email, password } = values;
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user);
              //update use profile
              updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: "https://example.com/jane-q-user/profile.jpg",
              })
                .then(() => {
                  const { uid, email, displayName, photoURL } = auth.currentUser;
                  dispatch(addUser({ uid, email, displayName, photoURL }));
                  toast.success(`${name} signup successfully `);
                  navigate("/browse");
                })
                .catch((error) => {
                  toast.error(error.errorMessage);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toast.error(errorMessage);
            });
        }
        action.resetForm();
      },
    });

  return (
    <div
      id="loginForm"
      className="relative flex justify-center items-center min-h-screen"
    >
      <form
        className="p-8 w-full max-w-md bg-black bg-opacity-80 text-white rounded-md"
        onSubmit={handleSubmit}
      >
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
              {touched.name && errors.name && (
                <p className="text-red-700 font-bold">{errors.name}</p>
              )}
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
          {touched.email && errors.email && (
            <p className="text-red-700 font-bold">{errors.email}</p>
          )}
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
          {touched.password && errors.password && (
            <p className="text-red-700 font-bold">{errors.password}</p>
          )}
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
              {touched.confirm_password && errors.confirm_password && (
                <p className="text-red-700 font-bold">
                  {errors.confirm_password}
                </p>
              )}
            </>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="block w-full p-4 my-6 rounded-md bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p
          className="py-2 font-semibold cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Existing User? Log In Now"}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
