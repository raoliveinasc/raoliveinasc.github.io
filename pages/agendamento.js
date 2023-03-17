import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Trace from '@/components/Trace'
import Link from 'next/link'
import AgendamentoForm from '@/components/AgendamentoForm'

const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})


export default function Agendamento() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Agendamento | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <div className='agendamento-hero'>
          <div className='agendamento-filter'>
            <div className='agendamento-internal'>
              <div className='agendamento-text'>Agende sua Visita</div>
              <div className='agendamento-subtitle'>Tenha a praticidade de cuidar da sua motocicleta na palma das suas mãos</div>
              <Trace color="white"/>
              <Link href="/agendamento" className="agendar-ao agendamento-sector">AGENDAR SERVIÇO</Link>
            </div>
          </div>
        </div>
        <AgendamentoForm/>
        <Footer/>
      </main>
    </>
  )
}