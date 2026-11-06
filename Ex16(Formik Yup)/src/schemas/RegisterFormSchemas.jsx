import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Enter a positive age")
    .required("Age is required")
    .integer("Enter correct age"),

  password: yup.string().required("Password is required"),

  confirmpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password", yup.password)], "Invalid password"),
  term: yup.boolean().required("Term is required"),
});
