import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import corrente from "../public/promocao.png"

export default function Slideshow({}) {
    return (
        <>
            <Fade arrows={false} autoplay={true} indicators={true} duration={3500}>
                <div className="each-slide-effect">
                    <div className="slide pagina-padrao" >
                        <div className="internal-padrao">
                            <div className="internal-padrao-title">
                                <span className="oranged">Check up</span>
                                <span>Gratuito</span>
                            </div>
                            <div className="internal-padrao-flyer">
                                <Link className="internal-padrao-button" href="/">Agende uma visita <i class="fa-solid fa-chevron-right"></i></Link>
                                <span className="internal-padrao-info">
                                Itens incluidos no Check Up - Freio, Pneu, Relação e Bateria 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="slide curiosidade">
                            <div className="centered-curiosidade">
                                Troca de óleo parece simples, mas precisa ser feita com <b>seriedade</b>. Quase sempre a troca de óleo de uma moto parece ser simples mas quando não realizada de maneira inadequada pode causar sérios defeitos no motor de sua moto. 
                                Você sabia disso? A dica é sempre procurar uma empresa especializada em troca de óleo com bom conceito no mercado. 
                            </div>
                        </div>
                    </div>
                <div className="each-slide-effect">
                    <div className='slide promocao'>
                        <div className='internal-promo'>
                            <div className='promo-text'>
                                <div className='promo-title'>
                                    <span>Toda a linha</span>
                                    de Corrente e Relação
                                </div>
                                <div className='promo-discount'>
                                    <span>15%</span>
                                    de desconto
                                </div>
                            </div>
                            <Image src={corrente} width="300"/>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}
