import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  weight: '400',
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
        <Footer/>
      </main>
    </>
  )
}
