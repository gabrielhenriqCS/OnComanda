import { useEffect, useState } from "react";
import { ComandaService } from "../services/comandaService";
import type { ComandaDTO } from "../@types";

export default function Comanda() {
  const [comandas, setComandas] = useState<ComandaDTO[]>([]);

  useEffect(() => {
    async function carregarMesas() {
      try {
        const { data } = await ComandaService.mostrarComandas();
        setComandas(data);
      } catch (error) {
        console.error("Erro ao carregar mesas:", error);
      }
    }
    carregarMesas();
  }, []);
  return (
    <section>
      <h1>Comanda</h1>
      <input type="text" placeholder="Digite o n° da mesa..." />

      <h2>Mesas livres</h2>
        <div>
              {comandas.length === 0 ? (
                  <p>Nenhuma comanda encontrada</p>
              ) : (
                      comandas.map((comanda) => (
                          <div key={comanda.id}>
                              Mesa: {comanda.mesaId} - Status: {comanda.status}
                          </div>
                      ))
              )}
        </div>
    </section>
  );
}
