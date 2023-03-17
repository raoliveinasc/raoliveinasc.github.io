import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Link from 'next/link'

const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})

export default function Company() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Empresa | Ottomotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <div className='company-hero'>
            <div className='company-filter'>
                <div className='company-internal'>
                    <div className='company-insider'>
                        <div className='company-title'>Conheça a <b>Otto</b>Motos</div>
                        <div className='company-subtitle'>A Startup responsável por simplificar a manutenção da sua motocicleta</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='company-goals-pre'>
            <div className='displayline-pts empty'></div>
            <div className='displayline-pts empty'></div>
            <div className='displayline-pts empty'></div>
        </div>
        <div className='company-goals'>
            <div className='company-internal'>
                <div className='company-title goals-one'>O que é a <b>Otto</b>Motos?</div>
                <div className='company-insider'>
                    <div className='company-subtitle goals-two'>A OttoMotos é uma startup de serviços focados em reparos rápidos de motocicletas através do uso da tecnologia.</div>
                </div>
            </div>
            <div className='company-internal glad'>
                <div className='company-title goals-three'>Visão, Valores e Missão</div>
                <div className='company-pilars'>
                    <div className='company-pilar'>
                        <div className='company-pilar-image'>
                            <div className='company-pilar-inside'>
                                <i class="fa-regular fa-tower-observation fa-2x"></i>
                            </div>
                            <div className='company-pilar-text'>
                                <span>Visão</span>
                            </div>
                        </div>
                        <span  className='pilar-writing'>Mudamos o jeito de prover serviços a motocicletas</span>
                    </div>
                    <div className='company-pilar'>
                        <div className='company-pilar-image'>
                            <div className='company-pilar-inside'>
                                <i class="fa-solid fa-flag fa-2x"></i>
                            </div>
                            <div className='company-pilar-text'>
                                <span>Valores</span>
                            </div>
                        </div>
                        <span className='pilar-writing'>Inovação, Sustentabilidade e Transparência</span>
                    </div>
                    <div className='company-pilar'>
                        <div className='company-pilar-image'>
                            <div className='company-pilar-inside'>
                                <i class="fa-solid fa-crosshairs fa-2x"></i>
                            </div>
                            <div className='company-pilar-text'>
                                <span>Missão</span>
                            </div>
                        </div>
                        <span className='pilar-writing'>Promover mais segurança ao realizar serviços de oficina</span>
                    </div>
                </div>
            </div>
            <div className='company-internal glad hijo'>
                <div className='company-title goals-three no-margin-attribute'>Atributos & Diferenciais</div>
                <div className='company-hache'>
                    <div className='company-attribute'>
                        <i className='fa-solid fa-layer-group fa-4x'></i>
                        <div className='attribute-text'>
                            <div className='attribute-title'>ATRIBUTOS</div>
                            <div className='attribute-items'>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Transparência</div>
                                    <div className='attribute-object-description'>Oficina Aberta & Catálogo Serviços Simplificado</div>
                                </div>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Credibilidade</div>
                                    <div className='attribute-object-description'>Profissionais Qualificados & Serviços Padronizados</div>
                                </div>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Atenção ao Cliente</div>
                                    <div className='attribute-object-description'>Ambiente Confortável & Atendimento Diferenciado</div>
                                </div>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Conveniência</div>
                                    <div className='attribute-object-description'>Serviço Leva&Traz, Moto Reserva, Garantia Estendida</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='company-attribute'>
                        <i className='fa-solid fa-ranking-star fa-4x'></i>
                        <div className='attribute-text'>
                            <div className='attribute-title'>DIFERENCIAIS</div>
                            <div className='attribute-items'>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Inovação</div>
                                    <div className='attribute-object-description'>Monitoramento Digital & Atendimento 24/7</div>
                                </div>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Sustentabilidade</div>
                                    <div className='attribute-object-description'>Descarte Apropriado para Resíduos</div>
                                </div>
                                <div className='attribute-object'>
                                    <div className='attribute-object-title'>Inclusão</div>
                                    <div className='attribute-object-description'>Parceria com ONGs para Desenvolvimeno de Profissionais</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='company-displaypoints-extra'>
                <div className='displayline-pts empty'></div>
                <div className='displayline-pts empty'></div>
                <div className='displayline-pts empty'></div>
            </div>
            <div className='application-form-center'>
                <div className='budget-form-title'>Trabalhe Conosco</div>
                <div className="budget-form-subtitle">Em breve estaremos contratando, acesse o link abaixo para preencher o formulário.</div>
                <Link href="/" className="agendar-ao application-margin">PREENCHER FORMULÁRIO</Link>
            </div>
        </div>
        <Footer/>
      </main>
    </>
  )
}