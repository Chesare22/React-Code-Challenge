import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MineralInterest, Npri, UpdatablePropertyName } from 'Types';

interface Handlers {
  addMineral: () => void;
  removeMineral: (action: { mineralId: MineralInterest['id'] }) => void;
  updateMineral: (action: {
    mineralId: MineralInterest['id'];
    propertyName: UpdatablePropertyName<MineralInterest>;
    newValue: string;
  }) => void;

  addNpri: (action: { mineralId: MineralInterest['id'] }) => void;
  removeNpri: (action: {
    mineralId: MineralInterest['id'];
    npriId: Npri['id'];
  }) => void;
  updateNpri: (action: {
    mineralId: MineralInterest['id'];
    npriId: Npri['id'];
    propertyName: UpdatablePropertyName<Npri>;
    newValue: string;
  }) => void;
}

function createNpri(): Npri {
  return {
    id: uuidv4(),
    interest: 0,
    owner: '',
  };
}

const valueOf = (propertyName: string) => ({
  is: (value: any) => (obj: any) => obj[propertyName] === value,
  isNot: (value: any) => (obj: any) => obj[propertyName] !== value,
});

function useMineralInterestsHandler(initialValue: MineralInterest[]) {
  const [[...state], setState] = useState(initialValue);

  const findMineralInterest = (mineralId: string) =>
    state.find(valueOf('id').is(mineralId));

  const handlers: Handlers = {
    addMineral: () => {
      state.push({
        ...createNpri(),
        npris: [],
        lease: '',
      });

      setState(state);
    },

    removeMineral: ({ mineralId }) => {
      setState(state.filter(valueOf('id').isNot(mineralId)));
    },

    updateMineral: ({ mineralId, propertyName, newValue }) => {
      const mineralInterest = findMineralInterest(mineralId);

      if (!mineralInterest) {
        return;
      }

      if (propertyName === 'interest') {
        mineralInterest.interest = parseFloat(newValue);
      } else {
        mineralInterest[propertyName] = newValue;
      }

      setState(state);
    },

    addNpri: ({ mineralId }) => {
      const mineral = findMineralInterest(mineralId);
      mineral?.npris.push(createNpri());

      setState(state);
    },

    removeNpri: ({ mineralId, npriId }) => {
      const mineral = findMineralInterest(mineralId);
      if (mineral) {
        mineral.npris = mineral?.npris.filter(valueOf('id').isNot(npriId));
      }

      setState(state);
    },

    updateNpri: ({ mineralId, npriId, propertyName, newValue }) => {
      const mineral = findMineralInterest(mineralId);
      const npri = mineral?.npris.find(valueOf('id').is(npriId));

      if (!npri) {
        return;
      }

      if (propertyName === 'interest') {
        npri.interest = parseFloat(newValue);
      } else {
        npri[propertyName] = newValue;
      }

      setState(state);
    },
  };

  return { state, handlers };
}

export default useMineralInterestsHandler;
export type { Handlers };
