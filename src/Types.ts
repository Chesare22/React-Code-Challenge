interface Npri {
  id: string;
  owner: string;
  interest: number;
}

interface Tract extends Npri {
  npris: Npri[];
  lease: string;
}

export type { Tract, Npri };
