
export interface CreateMesa {
  mesa: number;
  status?: 'LIVRE' | 'OCUPADA';
}

export interface UpdateMesa {
    status?: 'LIVRE' | 'OCUPADA'
}