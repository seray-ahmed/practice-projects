import React, { useState } from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmpassword: "",
      term: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Please enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <p className="input-error">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            id="age"
            placeholder="Please enter your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && touched.age && (
            <p className="input-error">{errors.age}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Please enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <p className="input-error">{errors.password}</p>
          )}
        </div>

        <div>
          <label> Confirm Password </label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="Please enter your password"
            value={values.confirmpassword}
            onChange={handleChange}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <p className="input-error"> {errors.confirmpassword}</p>
          )}
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="term"
            name="term"
            value={values.term}
            onChange={handleChange}
          />

          <label htmlFor="term">I have read and agree to the Terms</label>
        </div>
        {errors.term && touched.term && (
          <p className="input-error"> {errors.term}</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
