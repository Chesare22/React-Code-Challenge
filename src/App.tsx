import React, { useReducer } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { MineralInterest } from './Types';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership, { Action } from './EditTractOwnership';
import Icon from './Icon';

function reducer(
  state: MineralInterest[],
  { type, recordId, propName, newVal }: Action
) {
  switch (type) {
    case 'updateMineral':
      const mineral = state.find(({ id }) => id === recordId);
      if (mineral && newVal !== undefined && propName) {
        if (propName === 'interest') {
          mineral[propName] = parseFloat(newVal);
        } else {
          mineral[propName] = newVal;
        }
      }
      break;
  }
  return state;
}

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
  const [state, dispatch] = useReducer(reducer, tractOwnerships);
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
          <EditTractOwnership value={state} onChange={dispatch} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
