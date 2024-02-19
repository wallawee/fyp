import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './case.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>PC CASING</h1>
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
            <th>Type</th>
            <th>Color</th>
            <th>PSU</th>
            <th>Side Panel</th>
            <th>External Volume (Liters)</th>
            <th>Internal 3.5" Bays</th>
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
                    <td>{item.type}</td>
                    <td>{item.color}</td>
                    <td>{item.psu || 'N/A'}</td>
                    <td>{item.side_panel}</td>
                    <td>{item.external_volume}</td>
                    <td>{item.internal_35_bays}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
