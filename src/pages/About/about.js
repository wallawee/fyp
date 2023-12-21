import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [psus, setPsus] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch data from your backend when the component mounts
    axios.get('http://localhost:5000/api/psus') // Adjust the URL accordingly
      .then(response => setPsus(response.data))
      .catch(error => console.error(error));
      console.log(setPsus)
  }, []);

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>PSU Table</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search PSUs'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Wattage</th>
              <th>Efficiency</th>
              <th>Color</th>
              <th>Type</th>
              <th>Modular</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {psus
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.wattage}</td>
                  <td>{item.efficiency}</td>
                  <td>{item.color}</td>
                  <td>{item.type}</td>
                  <td>{item.modular ? 'Yes' : 'No'}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
