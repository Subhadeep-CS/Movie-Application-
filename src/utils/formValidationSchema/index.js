import * as yup from 'yup';

const name = yup
  .string()
  .min(4, "Full name must be at least 4 characters")
  .required("Enter your full name");

const email = yup
  .string()
  .email("Invalid email address")
  .required("Enter your email");

const password = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .required("Enter your password")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter");

const confirm_password = yup
  .string()
  .oneOf([yup.ref("password")], "Confirm password should match the password")
  .required("Enter Your Confirm Password");

export const signupSchema = yup.object({
  name,
  email,
  password,
  confirm_password,
});

export const signinSchema = yup.object({
  email,
  password,
});
