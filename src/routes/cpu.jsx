import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './cpu.js';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>PROCESSOR</h1>
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
              <th>Core Count</th>
              <th>Core Clock</th>
              <th>Boost Clock</th>
              <th>TDP</th>
              <th>Graphics</th>
              <th>SMT</th>
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
                  <td>{item.core_count}</td>
                  <td>{item.core_clock}</td>
                  <td>{item.boost_clock}</td>
                  <td>{item.tdp}</td>
                  <td>{item.graphics}</td>
                  <td>{item.smt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
