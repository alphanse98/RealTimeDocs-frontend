import React, { useEffect, useState } from "react";
import {
  fetchAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../service/EmployeeService";
import EmployeeModel from "../components/EmployeeModel";
import { useNavigate } from "react-router-dom";


const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [deparment, setDeparment] = useState([]);
  const [editemployee, seteditEmployee] = useState(null);
  const [popup, setPopup] = useState(false);

  const navigate = useNavigate();


  const fetchEmployee = async () => {
    try {
      const data = await fetchAllEmployee();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addEmployee = async (employee) => {
    await createEmployee(employee);
    await fetchEmployee();
    setPopup(false)
  };

  const updateEmployeeApi = async (employee) => {
    await updateEmployee(employee ,editemployee?.id);
    await fetchEmployee();
    setPopup(false)
  };

  const handleEdit = (employee) => {
    seteditEmployee(employee  );
    setPopup(true);
  };

  const handleDeleteEmployee = async (employee) => {
    await deleteEmployee(employee);
    await fetchEmployee();
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <button onClick={()=> navigate(`/department`)}> Department</button>
      {!popup ? (
        <button
          onClick={() => {
            seteditEmployee(null);
            setPopup(true);
          }}
        >
          add Employee
        </button>
      ) : (
        <EmployeeModel
          editemployee={editemployee}
          addEmployee={addEmployee}
          updateEmployeeApi={updateEmployeeApi}
        />
      )}
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Departmen</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Action</th>
          </tr>

          {employees?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>{item?.departmentId}</td>
              <td>{item?.age}</td>
              <td>{item?.gender}</td>
              <td>{item?.nationality}</td>
              <td>
                <button onClick={() => handleEdit(item)}>edit</button>
                <button onClick={() => handleDeleteEmployee(item)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
