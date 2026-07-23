import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
const initialValues = {
  name: "",
  mail: "",
  phoneNum: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mail: Yup.string().email("Invalid email").required("Email is required"),
  phoneNum: Yup.string().required("Phone number is required"),
});

export default function CreateApplication() {
  const handleClick = (values) => {
    console.log("Values from the form: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleClick}
    >
      <Form>
        <div>
          <label> Name </label>
          <Field name="name"></Field>
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label>Email</label>
          <Field name="mail"></Field>
          <ErrorMessage name="mail" component="div" />
        </div>

        <div>
          <label>Phone Number</label>
          <Field name="phoneNum"></Field>
          <ErrorMessage name="phoneNum" component="div" />
        </div>

        <button type="submit">Submit your form</button>
      </Form>
    </Formik>
  );
}
