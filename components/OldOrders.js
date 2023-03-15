import React from 'react'
import OoLogs from './OoLogs'
import Link from 'next/link'

export default function OldOrders() {
  return (
    <div className='old-orders dashboard-item'>
        <div className='internal'>
            <div className='dashboard-ip'>HISTÓRICO DE SERVIÇOS</div>
            <div className='oo-section'>
                <table class="oo-table">
                    <thead className="oo-th">
                        <tr>
                        <th>Ordem</th>
                        <th>Data Efetuada</th>
                        <th>Tipo</th>
                        <th>Garantia até</th>
                        </tr>
                    </thead>
                    <tbody className="oo-tb">
                        <OoLogs/>
                    </tbody>
                </table>
            </div>
            <div className="ao-info">
              <div className="ao-legenda oo-type">
                <div className="legenda">Caso necessite requisitar a garantia, contate a OttoMotos. </div>
                <div className="legenda">Certifique-se que ela está dentro do prazo de validade.</div>
              </div>
              <Link href="/" className="agendar-oo">CONTATAR</Link>
            </div>
        </div>
    </div>
  )
}
