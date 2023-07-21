import { Formik } from 'formik';
import React from 'react'

const Homework6 = () => { 
  
  const [students, setStudents] = React.useState([])
  
  const [updatingIndex, setUpdatingIndex] = React.useState(-1);

  const handleFormSubmit = (formValues, formik) => {
    const currentStudents = [...students]
    currentStudents.push(formValues)
    setStudents(currentStudents)
    formik.resetForm()
  }

  //callback
  const handleEdit = (editedStudent, callbacks) => { 
    const editedStudentIndex = students.findIndex(student => student.email === editedStudent.email &&
      student.name === editedStudent.name && 
      student.phone === editedStudent.phone
    )

    setUpdatingIndex(editedStudentIndex)
    callbacks.setFieldValue('name', editedStudent.name)
    callbacks.setFieldValue('phone', editedStudent.phone)
    callbacks.setFieldValue('email', editedStudent.email)
  }

  const handleUpdate = (values) => { 
    console.log(values)
    // const updatedStudents = [...students]
    // updatedStudents[updatingIndex] = form
    // setStudents(updatedStudents) //reset state
    // resetForm()//reset form
    // setUpdatingIndex(-1)
  }

  return (
      <div>
      <h1>Student List</h1>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: ''
        }}

        onSubmit={handleFormSubmit}
      >
        {({ handleChange, values, handleSubmit, setFieldValue }) => (
          <>
            <div>
              <div>
                <label>Name: </label>
                <input type='text' name="name" onChange={handleChange} value={values.name} />
              </div>
              <div>
                <label>Phone: </label>
                <input type="number" name="phone" onChange={handleChange} value={values.phone}  />
              </div>
              <div>
                <label>Email: </label>
                <input type='email' name="email" onChange={handleChange} value={values.email}/>
              </div>

              {updatingIndex >= 0 ?  <button onClick={() => handleUpdate(values)}>Update</button> :  <button type="button" onClick={handleSubmit}>Submit</button>}
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student?.email}>
                    <td>{student?.name}</td>
                    <td>{student?.phone}</td>
                    <td>{student?.email}</td>
                    <td>
                      <button onClick={() => handleEdit(student, {setFieldValue})}>Edit</button>
                      <button onClick={() => console.log('delete')}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          )}
        
      </Formik> 
      </div>
  )
}

export default Homework6