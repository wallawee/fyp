import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './ram.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>RAM</h1>
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
      <th>Speed</th>
      <th>Modules</th>
      <th>Price Per GB</th>
      <th>Color</th>
      <th>First Word Latency</th>
      <th>CAS Latency</th>
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
          <td>{item.speed.join('/')}</td> {/* Joining speed array elements */}
          <td>{item.modules.join('x')}</td> {/* Joining modules array elements */}
          <td>{item.price_per_gb}</td>
          <td>{item.color}</td>
          <td>{item.first_word_latency}</td>
          <td>{item.cas_latency}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
