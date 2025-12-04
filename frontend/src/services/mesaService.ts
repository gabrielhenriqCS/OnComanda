import type { CreateMesa, UpdateMesa } from "../@types/Mesa";
import api from "./api";

export const MesaService = {
  mostrarMesas: () => api.get("/mesas"),
  criar: (data: CreateMesa) => api.post("/mesas/criar", data),
  buscar: (mesa: number) => api.get(`/mesas/${mesa}`),
  atualizar: (mesa: number, data: UpdateMesa) =>
    api.patch(`/mesas/${mesa}`, data),
};
