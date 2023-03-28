import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup.string().min(5).max(25),
  username: yup.string().min(4).max(25),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .matches(/([0-9])/, "your password must contain at least one number")
    .matches(
      /((?=.*[@!#$%^&*()/\\]))/,
      "Your password must contain at least one special character"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match")
    .required(),
  telephone: yup.string().min(12).max(25),
});
