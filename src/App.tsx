import React, { useReducer } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { MineralInterest } from './Types';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership, { Action } from './EditTractOwnership';
import Icon from './Icon';

const actions = {
  updateMineral(
    state: MineralInterest[],
    { recordId, propName, newVal }: Required<Omit<Action, 'type'>>
  ) {
    const mineral = state.find(({ id }) => id === recordId);
    if (mineral) {
      if (propName === 'interest') {
        mineral[propName] = parseFloat(newVal);
      } else {
        mineral[propName] = newVal;
      }
    }

    return state;
  },

  updateNpri(
    state: MineralInterest[],
    { recordId, propName, newVal }: Required<Omit<Action, 'type'>>
  ) {
    const npri = state
      .flatMap(({ npris }) => npris)
      .find(({ id }) => id === recordId);

    if (npri) {
      if (propName === 'owner') {
        npri.owner = newVal;
      } else if (propName === 'interest') {
        npri.interest = parseFloat(newVal);
      }
    }

    return state;
  },
};

function reducer(
  state: MineralInterest[],
  { type, recordId, propName, newVal }: Action
) {
  if (
    (type === 'updateMineral' || type === 'updateNpri') &&
    newVal !== undefined &&
    recordId &&
    propName
  ) {
    return actions[type](state, { recordId, propName, newVal });
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
