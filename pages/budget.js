import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Trace from '@/components/Trace'
import Link from 'next/link'
import BudgetForm from '@/components/BudgetForm'

const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})


export default function Budget() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Orçamento | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <div className='budget-hero'>
          <div className='budget-filter'>
            <div className='budget-internal'>
              <div className='budget-text'>Solicite um Orçamento</div>
              <div className='budget-subtitle'>Conheça o jeito mais prático de cuidar da sua motocicleta</div>
              <Trace color="orange"/>
              <Link href="/budget" className="agendar-ao budget-sector">ORÇAR SERVIÇO</Link>
            </div>
          </div>
        </div>
        <BudgetForm/>
        <Footer/>
      </main>
    </>
  )
}
