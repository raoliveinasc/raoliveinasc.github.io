import Head from 'next/head'
import Trace from '@/components/Trace'
import { Montserrat } from 'next/font/google'
import Slideshow from '@/components/Slideshow'
import Services from '@/components/Services'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import RequestBudget from '@/components/RequestBudget'
import WhyOtto from '@/components/WhyOtto'
import Footer from '@/components/Footer'
import AccordionOtto from '@/components/AccordionOtto'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Image from 'next/image'
import logoLeading from "../public/logo-main-landing.png"

const montserrat = Montserrat({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin']
})

export default function Home() {

  const router = useRouter()
  const [openLanding, setLandingOpen] = useState(false)

  function toggleContent() {
    setLandingOpen(!openLanding);
  }


  return (
    <>
      <Head>
        <title>Início | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {openLanding ? 
          <>
          <Header pathnamed={router.pathname}/>
          <main className={montserrat.className}>
            <div className='title-center'>
              <div className='main-title'><span>Otto</span>Motos</div>
              <div className='main-subtitle'>Uma nova forma de prover serviços.</div>
              <Trace color="orange"/>
            </div>
            <Toaster/>
            <Slideshow/>
            <Services/>
            <RequestBudget/>
            <WhyOtto/>
            {/* <AccordionOtto/> */}
            <Footer/>
          </main>
          </>
        : 
        <main className={montserrat.className}>
        <div className='landing-page-otto'>
          <div className='welcome-title'>
            <Image src={logoLeading} className="logo-landing"/>
            <p className='p1'>Aguarde estamos chegando!</p>
            <p className='p2'>Uma nova forma de prover serviços</p>
          </div>
          <div className='svgone'>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M202.82812,146.82812l-72,72a3.99853,3.99853,0,0,1-5.65625,0l-72-72a3.99957,3.99957,0,0,1,5.65625-5.65625L124,206.34277V40a4,4,0,0,1,8,0V206.34277l65.17187-65.1709a3.99957,3.99957,0,0,1,5.65625,5.65625Z"/>
            </svg>
          </div>
          <div className='explanation-landing'>
            <p>Quem somos?</p>
            <div>A OttoMotos é uma startup na área de serviços focada em reparos rápidos de motocicletas visando prover serviços com Credibilidade de forma Transparente, Diferenciada e Conveniente. </div>
            <button onClick={toggleContent} className='welcome-button'>Acessar mesmo assim</button>
          </div>
        </div>
      </main>
}
    </>
  )
}
