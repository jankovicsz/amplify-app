import React from "react";
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label className="form-label mt-4" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? "form-control is-invalid"
            : "form-control"
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
