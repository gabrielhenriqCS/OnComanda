import type { CreatePedido, UpdateStatus } from "../@types/Pedido";
import api from "./api";

export const pedidosService = {
  mostrarPendentes: () => api.get("/pedidos"),
  abrirPedido: (data: CreatePedido) => api.post("/pedidos/criar", data),
  buscarPedido: (pedidoId: number) => api.get(`/pedidos/${pedidoId}`),
  atualizarStatus: (id: number, data: UpdateStatus) =>
    api.patch(`/pedidos/${id}/status`, data),
};
