interface Npri {
  id: String;
  owner: String;
  interest: number;
}

interface Tract extends Npri {
  npris: Npri[];
  lease: String;
}

export type { Tract, Npri };
