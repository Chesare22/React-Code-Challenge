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

interface PropertyUpdater {
  (propName?: string): (value: any) => void;
}

export type { MineralInterest, Npri, Icon, Rotation, PropertyUpdater };
