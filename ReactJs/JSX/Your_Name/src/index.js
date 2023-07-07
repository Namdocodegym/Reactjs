import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Your Name';

//Tạo element hiển thị tên 
const element= React.createElement('h1',{stype :{textAlign : 'center'}}, name)

//render element
const root = ReactDOM.createRoot(document.getElementById('root'));

//Truyền element vào hàm root.render()
root.render(element)