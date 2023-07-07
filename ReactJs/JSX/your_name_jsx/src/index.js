import ReactDOM from 'react-dom/client';

//Khởi tạo biến name mang giá trị tên bạn muốn thể hiện
const name = "Your Name";

//Tạo element hiển thị tên của bạn
const element = <h1 style={{textAlign:"center"}}>
  {name}
</h1>

//Code lệnh render element
const root = ReactDOM.createRoot(document.getElementById("root"));

//Truyền element vào hàm root.render()
root.render(element)