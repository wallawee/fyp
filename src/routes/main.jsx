import React from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data as motherboardData } from './motherboard2.js';
import { data as caseData } from './case.js';
import { data as coolerData } from './cooler.js';
import { data as fanData } from './fan.js';
import { data as gpuData } from './gpu.js';
import { data as psuData } from './psu.js';
import { data as ramData } from './ram.js';
import { data as storageData } from './storage.js';

function App() {
  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Custom PC Builder</h1>
        <Row>
          <Col>
            <h4>Motherboard</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="motherboard-dropdown">
                Select Motherboard
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {motherboardData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h4>Case</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="case-dropdown">
                Select Case
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {caseData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Add similar code blocks for other components */}
        </Row>
        <Row>
          <Col>
            <h4>Cooler</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="cooler-dropdown">
                Select Cooler
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {coolerData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h4>Fan</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="fan-dropdown">
                Select Fan
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {fanData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Add similar code blocks for other components */}
        </Row>
        <Row>
          <Col>
            <h4>GPU</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="gpu-dropdown">
                Select GPU
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {gpuData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h4>PSU</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="psu-dropdown">
                Select PSU
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {psuData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Add similar code blocks for other components */}
        </Row>
        <Row>
          <Col>
            <h4>RAM</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="ram-dropdown">
                Select RAM
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {ramData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h4>Storage</h4>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="storage-dropdown">
                Select Storage
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {storageData.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Add similar code blocks for other components */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
