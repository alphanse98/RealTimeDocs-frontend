import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DepartmentModel = ({
  editDepartment,
  handleCreate,
  handleUpdate,
  setIsPopup,
}) => {
  const initialValues = {
    name: editDepartment?.name || "",
    description: editDepartment?.description || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    description: Yup.string().max(
      100,
      "Description must be at most 100 characters"
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (editDepartment) {
      handleUpdate(values);
    } else {
        handleCreate(values);
    }
    resetForm();
    setIsPopup(false)
  };

  return (
    <div className="new-form-container">
      <h2>Department</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="new-form">
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                placeholder="Enter department name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="description">Description (optional):</label>
              <Field
                id="description"
                name="description"
                placeholder="Enter description"
                as="textarea"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit">Submit</button>
            <button
              className="CancelBtn"
              type="Cancel"
              onClick={() => setIsPopup(false)}
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepartmentModel;
