import Image from "next/image"
import src1 from "../public/picture1.svg"
import src2 from "../public/picture2.svg"
import src3 from "../public/picture3.svg"
import src4 from "../public/picture4.svg"
import src5 from "../public/picture5.svg"
import src6 from "../public/Picture6.png"

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
                          <div className="service-box-title">Óleos, Filtros e Fluidos</div>
                          <div className="service-box-icon">
                          <i class="fa-regular fa-fill-drip"></i>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="service-box-title">Cabos, Bateria e Velas</div>
                          <div className="service-box-icon">
                            <i class="fa-regular fa-car-battery"></i>
                          </div>
                      </div>
                  </div>
                  <div className="service-column">
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="service-box-title">Pneus, Câmaras e Rolamentos</div>
                          <div className="service-box-icon">
                          <i class="fa-regular fa-tire"></i>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA & REPARO</div>
                          <div className="service-box-title">Freios, Lonas e Discos</div>
                          <div className="service-box-icon">
                          <i class="fa-regular fa-grate-droplet"></i>
                          </div>
                      </div>
                      <div className="service-filler"></div>
                  </div>
                  <div className="service-column">
                      <div className="service-filler"></div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA</div>
                          <div className="service-box-title">Corrente, Correia e Relação</div>
                          <div className="service-box-icon">
                            <i class="fa-regular fa-gears"></i>
                          </div>
                      </div>
                      <div className="service-box">
                          <div className="service-box-type">TROCA</div>
                          <div className="service-box-title">Suspensões, Hidráulicos e Pressão</div>
                          <div className="service-box-icon">
                          <i class="fa-regular fa-reel"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}
