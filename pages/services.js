import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import UserScore from '@/components/UserScore'
import ActiveOrders from '@/components/ActiveOrders'
import Rewards from '@/components/Rewards'
import OldOrders from '@/components/OldOrders'
import Trace from '@/components/Trace'
import ServiceList from '@/components/ServiceList'

const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})

export default function Services() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>MinhaOttoMotos | Ottomotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <div className='services-hero'>
            <div className='services-filter'>
                <div className='services-internal'>
                    <div className='services-text'>Conheça os Serviços</div>
                    <div className='services-subtitle'>Desde manutenção preventiva até trocas de peças completas</div>
                    <Trace color="orange"/>
                    <div className='displayline'>
                        <div className='displayline-pts'></div>
                        <div className='displayline-line'></div>
                        <div className='displayline-pts'></div>
                    </div>
                </div>
            </div>
        </div>
        <ServiceList/>
        <Footer/>
      </main>
    </>
  )
}