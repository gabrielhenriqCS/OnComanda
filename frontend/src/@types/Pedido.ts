export interface CreatePedido {
  comandaId: number;
  itens: {
    produtoId: number;
    quantidade: number;
    observacao?: string;
  }[];
}

export interface UpdateStatus {
  status: 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';
}