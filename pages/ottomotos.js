import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import UserScore from '@/components/UserScore'
import ActiveOrders from '@/components/ActiveOrders'
import Rewards from '@/components/Rewards'
import OldOrders from '@/components/OldOrders'
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"


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
  const supabase = useSupabaseClient()
  const [personNameCondition, setPersonNameCondition] = useState('')

  async function NameConditioned() {
    if (sessionStorage.getItem("person_name") && personNameCondition != sessionStorage.getItem("person_name")) {
      setPersonNameCondition(sessionStorage.getItem("person_name"))
    } else {
      try {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`person_name`)
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data && data.person_name != null && personNameCondition != data.person_name) {
          sessionStorage.setItem("person_name", data.person_name)
          setPersonNameCondition(data.person_name)
        } else if (data.person_name == null) {
          sessionStorage.setItem("person_name", "Motoqueiro")
          setPersonNameCondition("Motoqueiro")
        }
      } catch (error) {
        console.log('Error loading user data!')
        console.log(error)
      }
    }
  }
  NameConditioned()
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
                <div className='user-hello-dashboard'>Olá, {user ? personNameCondition : "Motoqueiro"}</div>
                <div className='dashboard-top-inline'>
                  <div className='dashboard-date-constant'>{getFormattedDate()}</div>
                  <Link href="/profile" className='settings-button'>
                    Configurações
                    <i class="fa-solid fa-gear fa-lg"></i>
                  </Link>
                </div>
            </div>
            {personNameCondition == "Motoqueiro" ?             
              <div className='dashboard-header notifying'>
                  <div className='dashboard-date-constant'>
                  Para ter acesso a todas as functionalidades, finalize o seu cadastro em Configurações.
                  </div>
              </div> : null
            }
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
