import Head from 'next/head'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})


export default function Budget() {
  return (
    <>
      <Head>
        <title>Login | OttoMotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={montserrat.className}>
      </main>
    </>
  )
}
