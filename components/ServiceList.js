import Trace from "./Trace"
import Link from "next/link"

export default function ServiceList() {
  return (
    <>
    <div className="sl-line"></div>
    <div className="servicelist-surround">
          <div className="servicelist-internal">
              <div className="servicelist-title">Catálogo de Serviços</div>
              <div className="servicelist-subtitle">Cuide da sua motorcicleta do novo jeito mais fácil</div>
              <div className="servicelist-display">
                  <div className="service-column">
                      <div className="service-filler"></div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA</div>
                          <div className="display-inline">
                            <div className="service-box-title">Óleos, Filtros e Fluidos</div>
                            <div className="service-box-icon">
                                <i class="fa-solid fa-fill-drip fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="display-inline">
                            <div className="service-box-title">Cabos, Bateria e Velas</div>
                            <div className="service-box-icon">
                                <i class="fa-solid fa-car-battery fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="service-column">
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="display-inline">
                            <div className="service-box-title">Pneus, Câmaras e Rolamentos</div>
                            <div className="service-box-icon">
                                <i class="fa-solid fa-drum-steelpan fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="display-inline">
                            <div className="service-box-title">Freios, Lonas e Discos</div>
                            <div className="service-box-icon">
                                <i class="fa-solid fa-compact-disc fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                      <div className="service-filler"></div>
                  </div>
                  <div className="service-column">
                      <div className="service-filler"></div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA</div>
                          <div className="display-inline">
                            <div className="service-box-title">Corrente, Correia e Relação</div>
                            <div className="service-box-icon">
                                <i class="fa-solid fa-gears fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA</div>
                          <div className="display-inline">
                            <div className="service-box-title">Suspensões, Hidráulicos e Pressão</div>
                            <div className="service-box-icon">
                            <i class="fa-solid fa-gas-pump fa-3x oranged-darken"></i>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-cta">
            <div className="services-title-second">Solicite um Orçamento</div>
            <div className="service-subtitle">Conheça o jeito mais fácil de cuidar da sua motocicleta</div>
            <Trace color="orange"/>
            <Link href="/budget" className="agendar-ao service-sector">ORÇAR SERVIÇO</Link>
          </div>
      </div></>
  )
}
