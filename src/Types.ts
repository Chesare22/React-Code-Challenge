import { Form } from 'react-bootstrap';

interface Npri {
  id: string;
  owner: string;
  interest: number;
}

interface MineralInterest extends Npri {
  npris: Npri[];
  lease: string;
}

type Icon = 'add' | 'indent' | 'remove' | 'smile';
type Rotation = 90 | 180 | 270 | undefined;

type UpdatablePropertyName<T extends Npri> = Exclude<keyof T, 'id' | 'npris'>;
type FormControlHandler = Parameters<typeof Form.Control>[0]['onChange'];

// Tipo de función que recibe el nombre de una propiedad de MineralInterest y
// devuelve una función que se puede mandar al `onChange` de un Form.Control
interface UpdateProperty<T extends Npri> {
  (propName: UpdatablePropertyName<T>): FormControlHandler;
}

export type {
  MineralInterest,
  Npri,
  Icon,
  Rotation,
  UpdateProperty,
  UpdatablePropertyName,
};
