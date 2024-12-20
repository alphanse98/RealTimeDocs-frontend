import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmployeeModel = ({editemployee,addEmployee,updateEmployeeApi}) => {
  const departments = [
    { id: "1", name: "HR" },
    { id: "2", name: "Engineering" },
    { id: "3", name: "Sales" },
  ];


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't exceed 50 characters")
      .required("Name is required"),
    age: Yup.number()
      .min(18, "Age must be at least 18")
      .max(65, "Age can't exceed 65")
      .required("Age is required"),
    departmentId: Yup.string().required("Department is required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Invalid gender")
      .required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
  });

  const initialData = {
    name: editemployee?.name || "",
    age: editemployee?.age || "",
    departmentId: editemployee?.departmentId || "",
    gender: editemployee?.gender || "",
    nationality: editemployee?.nationality || "",
  };

  const handleSubmit = (values) => {
   if(!editemployee){
    addEmployee(values)
   }else{
    updateEmployeeApi(values)
   }
  };

  return (
    <div className="new-form-container">
      <h2>Employee Form</h2>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="new-form">
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <Field type="number" name="age" />
              <ErrorMessage
                name="age"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="departmentId">Department</label>
              <Field as="select" name="departmentId">
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="departmentId"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label>Gender</label>
              <div>
                <Field type="radio" name="gender" value="male" /> Male
                <Field type="radio" name="gender" value="female" /> Female
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="nationality">Nationality</label>
              <Field type="text" name="nationality" />
              <ErrorMessage
                name="nationality"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmployeeModel;
