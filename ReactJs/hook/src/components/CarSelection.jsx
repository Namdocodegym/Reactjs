import React,{useState} from "react";

const CarSelection = () => {
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const cars = ['Car A', 'Car B', 'Car C'];
    const colors = ['Red', 'Blue', 'Green'];
  
    const handleCarChange = (event) => {
      setSelectedCar(event.target.value);
    };
  
    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };
  
    return (
      <div>
        <h1>Select your car</h1>
        <div>
          <label>Select a car:</label>
          <select value={selectedCar} onChange={handleCarChange}>
            {cars.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select a color:</label>
          <select value={selectedColor} onChange={handleColorChange}>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>You selected a {selectedColor} - {selectedCar}</p>
        </div>
      </div>
    );
  };
  
  export default CarSelection;