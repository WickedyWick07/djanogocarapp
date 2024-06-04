import React, { useEffect, useState } from 'react';
import "./App.css"
import { getCars, createCar, updateCar, deleteCar } from './api';

function App() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ name: '', brand: '', year: 2000, model: '' });
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const cars = await getCars();
      setCars(cars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Creating car with data:', newCar);  // Log the data being sent
    try {
      await createCar(newCar);
      fetchCars();
      setNewCar({ name: '', brand: '', year: 2000, model: '' });
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  const handleCarUpdate = async (car) => {
    try {
      await updateCar(car.id, car);
      fetchCars();
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleCarDelete = async (id) => {
    try {
      await deleteCar(id);
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="App">
      
      <h1>Car Management</h1>
      <div className='form__container'>
      <form onSubmit={handleFormSubmit}>
          <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCar.name}
          onChange={handleInputChange}/>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={newCar.brand}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={newCar.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newCar.model}
          onChange={handleInputChange}
        />
        <button type="submit" className='add-btn'>Add Car</button>
      </form>
      </div>
      <h2>Car List</h2>
      <ul>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <div className='list__container'>
            <li key={car.id}>
              {car.name} - {car.brand} - {car.year} - {car.model}
              <button onClick={() => setSelectedCar(car)}>Edit</button>
              <button onClick={() => handleCarDelete(car.id)}>Delete</button>
            </li>
            </div>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </ul>
      {selectedCar && (

        <div className='update__container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCarUpdate(selectedCar);
            setSelectedCar(null);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={selectedCar.name}
            onChange={(e) =>
              setSelectedCar({ ...selectedCar, name: e.target.value })
            }
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={selectedCar.brand}
            onChange={(e) =>
              setSelectedCar({ ...selectedCar, brand: e.target.value })
            }
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={selectedCar.year}
            onChange={(e) =>
              setSelectedCar({ ...selectedCar, year: e.target.value })
            }
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={selectedCar.model}
            onChange={(e) =>
              setSelectedCar({ ...selectedCar, model: e.target.value })
            }
          />
          <button type="submit">Update Car</button>
        </form>
        </div>
      )}
    </div>
  );
}

export default App;
