import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { MineralInterest } from './Types';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership from './EditTractOwnership';
import Icon from './Icon';
import useMineralInterestsHandler from 'Hooks/useMineralInterestsHandler';

const tractOwnerships: MineralInterest[] = [
  {
    id: uuidv4(),
    owner: 'Luke Skywalker',
    interest: 0.5,
    lease: 'Tatooine Lease',
    npris: [
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: 0.45,
      },
      {
        id: uuidv4(),
        owner: 'Han Solo',
        interest: 0.15,
      },
    ],
  },
];

function App() {
  const { state, handlers } = useMineralInterestsHandler(tractOwnerships);
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>
              Landdox Code Challenge <Icon icon="smile" />
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditTractOwnership value={state} onChange={handlers} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
