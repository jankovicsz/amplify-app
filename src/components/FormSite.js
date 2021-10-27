import { useState } from "react";
import { Formik, Form, resetForm } from "formik";
import TextInput from "./TextInput";
import { inputFields } from "./inputFields";
import { validator } from "./validator";

const FormSite = () => {
  const [alerts, setAlerts] = useState({
    type: "",
    message: "",
  });
  const inputFieldsObject = Object.fromEntries(
    inputFields.map((field) => [field.name, ""])
  );
  return (
    <Formik
      initialValues={inputFieldsObject}
      validationSchema={validator.validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        setAlerts({
          type: "success",
          message: "The form has been successfully submitted",
        });
        setTimeout(() => setAlerts({ type: "", message: "" }), 3000);
        resetForm({ values: "" });
      }}
    >
      <Form>
        {inputFields.map((item) => (
          <div key={item.name}>
            <TextInput label={item.label} name={item.name} type={item.type} />
          </div>
        ))}

        <div>
          {alerts && (
            <p className={`alert alert-${alerts.type} mt-4`}>
              {alerts.message}
            </p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormSite;
