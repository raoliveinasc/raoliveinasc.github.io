import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Account from '@/components/Account'
import { useSession } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'


const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})



export default function Profile() {

  const router = useRouter()
  const session = useSession()
    
//   useEffect(() => {
//       if(!session){
//           router.push('/login')
//       }
//   });

  return (
    <>
      <Head>
        <title>Meu Perfil | Ottomotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <Account session={session}/>
        <Footer/>
      </main>
    </>
  )
}