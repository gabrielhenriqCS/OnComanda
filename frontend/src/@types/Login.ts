export interface Login {
  email: string;
  senha: string;
  funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
}

export interface LoginResponse {
  token: string;
  usuario: {
    id: number;
    nome: string;
    email: string;
    funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
  };
}
