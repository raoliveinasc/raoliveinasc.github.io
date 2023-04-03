import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import UserScore from '@/components/UserScore'
import ActiveOrders from '@/components/ActiveOrders'
import Rewards from '@/components/Rewards'
import OldOrders from '@/components/OldOrders'
import { useUser } from "@supabase/auth-helpers-react"


const montserrat = Montserrat({
  weight: ['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin']
})

function getFormattedDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}



export default function MyOttomotos() {

  const router = useRouter()
  const user = useUser()

  return (
    <>
      <Head>
        <title>MinhaOttoMotos | Ottomotos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header pathnamed={router.pathname}/>
      <main className={montserrat.className}>
        <div className='dashboard-surround'>
            <div className='dashboard-internal'>
            <div className='dashboard-header'>
                <div className='user-hello-dashboard'>Olá, {user ? user.id : "Raifran"}</div>
                <div className='dashboard-date-constant'>{getFormattedDate()}</div>
                <Link href="/profile" className='settings-button'>
                  Configurações
                  <i class="fa-solid fa-gear fa-lg"></i>
                </Link>
            </div>
            <div className='dashboard-sections'>
                <div className='prior-section-dashboard'>
                    <UserScore />
                    <Rewards/>
                </div>
                <div className='extent-section-dashboard'>
                    <ActiveOrders/>
                    <OldOrders/>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
      </main>
    </>
  )
}
