import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './storage.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>STORAGE</h1>
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
              <th>Capacity</th>
              <th>Price Per GB</th>
              <th>Type</th>
              <th>Cache</th>
              <th>Form Factor</th>
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
                  <td>{item.capacity}</td>
                  <td>{item.price_per_gb}</td>
                  <td>{item.type}</td>
                  <td>{item.cache}</td>
                  <td>{item.form_factor}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
