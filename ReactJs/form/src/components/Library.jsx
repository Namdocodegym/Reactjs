import React, { useState } from "react";
import "../App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [errors, setErrors] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Required";
    }

    if (!quantity.trim()) {
      newErrors.quantity = "Required";
    } else if (!/^\d+$/.test(quantity)) {
      newErrors.quantity = "Must be a number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newBook = {
      title: title.trim(),
      quantity: parseInt(quantity.trim()),
    };

    if (editingIndex !== -1) {
      // Nếu đang trong chế độ chỉnh sửa, cập nhật thông tin sách
      setBooks((prevBooks) => {
        const newBooks = [...prevBooks];
        newBooks[editingIndex] = newBook;
        return newBooks;
      });
      setEditingIndex(-1);
    } else {
      // Nếu không, thêm thông tin sách mới
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }

    // Reset các trường nhập liệu sau khi thêm/chỉnh sửa thành công
    setTitle("");
    setQuantity("");
    setErrors({});
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const book = books[index];
    setTitle(book.title);
    setQuantity(book.quantity.toString());
  };

  const handleDelete = (index) => {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div>
          <label>Số lượng:</label>
          <input type="text" value={quantity} onChange={handleQuantityChange} />
          {errors.quantity && <div className="error">{errors.quantity}</div>}
        </div>
        <button type="submit">{editingIndex !== -1 ? "Chỉnh sửa" : "Thêm sách"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
