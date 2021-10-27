import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const InputFields = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form className="flexform" onSubmit={formik.handleSubmit}>
        <label className="form-label mt-4" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
          className="form-control"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label className="form-label mt-4" htmlFor="firstName">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
          className="form-control"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label className="form-label mt-4" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          className="form-control"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default InputFields;
