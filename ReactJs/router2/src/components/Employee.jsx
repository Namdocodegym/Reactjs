import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20
  },
  {
    id: 2,
    name: "Khánh",
    age: 25
  },
  {
    id: 3,
    name: "Tú",
    age: 22
  },
];

const Employee = () => {
  const location = useLocation();
  const account = location?.state?.account;
  const navigate = useNavigate();

  const navigateToDetail = (employee) => {
    navigate('/employee-detail', { state: { employee } });
  };

  return (
    <div>
      <h2>Welcome, {account}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => navigateToDetail(employee)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
