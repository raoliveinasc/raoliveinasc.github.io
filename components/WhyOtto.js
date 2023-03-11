import wo1 from "../public/wo1.svg"
import wo2 from "../public/wo2.svg"
import wo3 from "../public/wo3.svg"
import wo4 from "../public/wo4.svg"
import wo5 from "../public/wo5.svg"
import Image from "next/image"
import Trace from "./Trace"


export default function WhyOtto({}) {
    return (
        <>
            <div className="whyotto">
                <div className="why-otto-top">
                    <div className="why-otto-title">
                    Porque escolher <span className="italic-title"><b>Otto</b>Motos</span>?
                    </div>
                    <Trace color="orange"/>
                </div>
                <div className="wos">
                    <div className="each-wo">
                        <Image src={wo1} width="110" height="110"/>
                        <div className="wo-text">
                            <div className="wo-title">Credibilidade</div>
                            <ul className="wo-subtext">
                                <li>Profissionais Qualificados</li>
                                <li>Serviços Padronizados</li>
                            </ul>
                        </div>
                    </div>
                    <div className="each-wo">
                        <Image src={wo2} width="110" height="110"/>
                        <div className="wo-text">
                            <div className="wo-title">Transparência</div>
                            <ul className="wo-subtext">
                                <li>Oficina Aberta</li>
                                <li>Catálogo de Serviços Simplificado</li>
                            </ul>
                        </div>
                    </div>
                    <div className="each-wo">
                        <Image src={wo3} width="110" height="110"/>
                        <div className="wo-text">
                            <div className="wo-title">Conveniência</div>
                            <ul className="wo-subtext">
                                <li>Serviço Leva&Traz</li>
                                <li>Moto Reserva</li>
                                <li>Garantia Estendida</li>
                            </ul>
                        </div>
                    </div>
                    <div className="each-wo">
                        <Image src={wo4} width="110" height="110"/>
                        <div className="wo-text">
                            <div className="wo-title">Inovação</div>
                            <ul className="wo-subtext">
                                <li>Pagamento Digital</li>
                                <li>Monitoramento Remoto</li>
                                <li>Auto-atendimento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="each-wo">
                        <Image src={wo5} width="110" height="110"/>
                        <div className="wo-text">
                            <div className="wo-title">Sustentável</div>
                            <ul className="wo-subtext">
                                <li>Descarte apropriado de resíduos</li>
                                <li>Baixa Emissão de Carbono</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}