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
              <h1>Site em construção...</h1>
              <Image src={logoLeading}/>
            </div>
            <button onClick={toggleContent} className='welcome-button'>Acessar mesmo assim</button>
          </div>
        </main>}
    </>
  )
}
