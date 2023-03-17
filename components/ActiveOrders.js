import Link from "next/link"
import AoLogs from "./AoLogs"

export default function ActiveOrders() {
  return (
    <div className="active-orders dashboard-item">
        <div className="internal">
            <div className="dashboard-ip">ORDENS DE SERVIÇO ATIVAS</div>
            <table class="ao-table">
              <thead className="ao-th">
                <tr>
                  <th>Ordem</th>
                  <th>Data Prevista</th>
                  <th>Tipo</th>
                  <th>Cancelar</th>
                </tr>
              </thead>
              <tbody className="ao-tb">
                <AoLogs/>
              </tbody>
            </table>
            <div className="ao-info">
              <div className="ao-legenda">
                <div className="legenda">Fixa - Oficina Fixa</div>
                <div className="legenda">Móvel - Oficina Móvel (Van)</div>
              </div>
              <Link href="/agendamento" className="agendar-ao">AGENDAR SERVIÇO</Link>
            </div>
        </div>
    </div>
  )
}

