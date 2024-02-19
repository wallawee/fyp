import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './psu.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>POWER SUPPLY</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Efficiency</th>
              <th>Wattage</th>
              <th>Modular</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.type}</td>
                  <td>{item.efficiency}</td>
                  <td>{item.wattage}</td>
                  <td>{item.modular}</td>
                  <td>{item.color}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
