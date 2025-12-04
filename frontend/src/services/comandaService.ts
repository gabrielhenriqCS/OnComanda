import type { CreateComanda, UpdateStatusComanda } from "../@types/Comanda";
import api from "./api";

export const ComandaService = {
    mostrarComandas: () => api.get('/comanda'),
    criar: (data: CreateComanda) => api.post('/comanda/criar', data),
    buscar: (id: number) => api.get(`/comanda/${id}`),
    fechar: (id: number, data: UpdateStatusComanda) => api.patch(`/comanda/${id}/fechar`, data.status = 'FECHADA')
}