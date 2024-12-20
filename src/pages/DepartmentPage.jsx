import React, { useEffect, useState } from "react";
import {
  fetchDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../service/DepartmaentService";
import DepartmentModel from "../components/DepartmentModel";

const DepartmentPage = () => {
  const [departments, setDepartment] = useState([]);
  const [editDepartment, setEditDepartment] = useState(null);
  const [isPopup, setIsPopup] = useState(false);

  const fetchdep = async () => {
    try {
      const data = await fetchDepartments();
      setDepartment(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async (department) => {
    await createDepartment(department);
    await fetchdep();
  };

  const handleUpdate = async (department) => {
    await updateDepartment(department, editDepartment?.id);
    await fetchdep();
  };

  const handleDelete = async (department) => {
    console.log("handleDelete", department);
    await deleteDepartment(department);
    await fetchdep();
  };

  const handleEdit = (department) => {
    setEditDepartment(department);
    setIsPopup(true);
  };

  useEffect(() => {
    fetchdep();
  }, []);

  return (
    <div>
      {!isPopup ? (
        <button
          onClick={() => {
            setIsPopup(true);
            setEditDepartment(null);
          }}
        >
          Add department
        </button>
      ) : (
        <DepartmentModel
          editDepartment={editDepartment}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          setIsPopup={setIsPopup}
        />
      )}
      <table>
        <tr>
          <th>name</th>
          <th>description</th>
        </tr>

        {departments?.map((item) => (
          <tr key={item?.id}>
            <td>{item?.name}</td>
            <td>{item?.description}</td>
            <td>
              <button onClick={() => handleEdit(item)}>edit</button>
              <button onClick={() => handleDelete(item)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DepartmentPage;
