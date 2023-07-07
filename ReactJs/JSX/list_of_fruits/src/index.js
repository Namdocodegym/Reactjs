import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const fruits = ['Apple','Banana','Orange','Apricot','Black rowan','Cranberry']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>List of fruits</h1>
    <ul>
      {fruits.map(item => (
        <li>
          {item}
        </li>
      ))}
    </ul>
    </div>
    
  </React.StrictMode>
);

