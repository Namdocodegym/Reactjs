import React from 'react';

const EmployeeDetail = ({ employee }) => {
  return (
    <div>
      <h2>Employee Detail</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
    </div>
  );
};

export default EmployeeDetail;
