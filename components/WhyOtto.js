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
                    Porque escolher <span className="itadivc-title"><b>Otto</b>Motos</span>?
                    </div>
                    <Trace color="orange"/>
                </div>
                <div className="wos">
                    <div className="wos-surround">
                        <div className="each-wo">
                            <Image src={wo1} width="110" height="110"/>
                            <div className="wo-text">
                                <div className="wo-title">Credibilidade</div>
                                <div className="wo-subtext">
                                    <div>Profissionais Qualificados</div>
                                    <div>Serviços Padronizados</div>
                                </div>
                            </div>
                        </div>
                        <div className="each-wo">
                            <Image src={wo2} width="110" height="110"/>
                            <div className="wo-text">
                                <div className="wo-title">Transparência</div>
                                <div className="wo-subtext">
                                    <div>Oficina Aberta</div>
                                    <div>Catálogo de Serviços Simplificado</div>
                                </div>
                            </div>
                        </div>
                        <div className="each-wo">
                            <Image src={wo3} width="110" height="110"/>
                            <div className="wo-text">
                                <div className="wo-title">Conveniência</div>
                                <div className="wo-subtext">
                                    <div>Serviço Leva&Traz</div>
                                    <div>Moto Reserva</div>
                                    <div>Garantia Estendida</div>
                                </div>
                            </div>
                        </div>
                        <div className="each-wo">
                            <Image src={wo4} width="110" height="110"/>
                            <div className="wo-text">
                                <div className="wo-title">Inovação</div>
                                <div className="wo-subtext">
                                    <div>Pagamento Digital</div>
                                    <div>Monitoramento Remoto</div>
                                    <div>Auto-atendimento</div>
                                </div>
                            </div>
                        </div>
                        <div className="each-wo">
                            <Image src={wo5} width="110" height="110"/>
                            <div className="wo-text">
                                <div className="wo-title">Sustentável</div>
                                <div className="wo-subtext">
                                    <div>Descarte apropriado de resíduos</div>
                                    <div>Baixa Emissão de Carbono</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}