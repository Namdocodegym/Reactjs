import React, { useState } from "react";
import "../App.css";

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function App() {
  const [to, setTo] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleToChange = (event) => {
    const { value } = event.target;
    setTo(value);
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.currentTarget.files[0];
    setFile(selectedFile);
  };

  const handleValidate = () => {
    const newErrors = {};

    if (!to) {
      newErrors.to = "Required";
    } else if (!REGEX.email.test(to)) {
      newErrors.to = "Invalid email address";
    }

    if (!title) {
      newErrors.title = "Required";
    }

    if (!message) {
      newErrors.message = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidate()) {
      alert("Sent successfully!!!");
      
    }
    console.log(file)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input type="text" value={to} onChange={handleToChange} />
          {errors.to && <div className="error">{errors.to}</div>}
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <div>
          <label>Upload file:</label>
          <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
