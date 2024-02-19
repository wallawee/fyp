import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './fan.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>FAN</h1>
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
    <th>Size</th>
    <th>Color</th>
    <th>RPM (Range)</th>
    <th>Airflow</th>
    <th>Noise Level</th>
    <th>PWM</th>
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
        <td>{item.size}</td>
        <td>{item.color}</td>
        <td>{item.rpm}</td>
        <td>{item.airflow}</td>
        <td>{item.noise_level}</td>
        <td>{item.pwm}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
