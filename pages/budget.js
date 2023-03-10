import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})

export default function Budget() {
  return (
    <>
      <Head>
        <title>Orçamento | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={montserrat.className}>
      </main>
    </>
  )
}
