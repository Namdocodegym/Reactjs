import React from 'react'
const Homework6 = () => { 
  const [students, setStudents] = React.useState([])

  const [form, setForm] = React.useState({ email: '', phone: '', name: ''})
  
  const [updatingIndex, setUpdatingIndex] = React.useState(-1);

  const resetForm = () => { 
    setForm({
      email: '',
      phone: '',
      name: ''
    })
  }

  const handleChange = (e) => { 
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    const currentStudents = [...students]
    currentStudents.push(form)
    setStudents(currentStudents)
    resetForm();
  }

  const handleEdit = (editedStudent) => { 
    const editedStudentIndex = students.findIndex(student => student.email === editedStudent.email &&
      student.name === editedStudent.name && 
      student.phone === editedStudent.phone
    )

    setForm({
      email: editedStudent.email,
      phone: editedStudent.phone,
      name: editedStudent.name
    })

    setUpdatingIndex(editedStudentIndex)
  }

  const handleUpdate = () => { 
    const updatedStudents = [...students]
    updatedStudents[updatingIndex] = form
    setStudents(updatedStudents) //reset state
    resetForm()//reset form
    setUpdatingIndex(-1)
  }

  return (
      <div>
        <h1>Student List</h1>
        <div>
          <label>Name: </label>
          <input name="name" onChange={handleChange} value={form.name} />
        </div>
        <div>
          <label>Phone: </label>
          <input type="number" name="phone" onChange={handleChange} value={form.phone}  />
        </div>
        <div>
          <label>Email: </label>
          <input type='email' name="email" onChange={handleChange} value={form.email}/>
      </div>
      
      {updatingIndex >= 0 ?  <button onClick={handleUpdate}>Update</button> :  <button onClick={handleSubmit}>Submit</button>}
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
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => console.log('delete')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Homework6