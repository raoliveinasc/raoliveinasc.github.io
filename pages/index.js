import Head from 'next/head'
import Image from 'next/image'
import Trace from '@/components/Trace'
import { Montserrat } from 'next/font/google'
import Slideshow from '@/components/Slideshow'

const montserrat = Montserrat({
  weight: ['300', '400', '800'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={montserrat.className}>
          <div className='title-center'>
            <div className='main-title'><span>Otto</span>Motos</div>
            <div className='main-subtitle'>Uma nova forma de prover serviços.</div>
            <Trace color="orange"/>
          </div>
          <Slideshow/>
      </main>
    </>
  )
}
