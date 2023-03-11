import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Login from './Login'
import logo from "../public/main-logo.jpg"
import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['300', '400', '600', '700', '800'],
    subsets: ['latin']
})


export default function Header({pathnamed}) {

    const links = [
        { href: '/', text: 'INÍCIO' },
        { href: '/budget', text: 'ORÇAMENTO' },
        { href: '/services', text: 'SERVIÇOS' },
        { href: '/myotto', text: 'MINHA OTTOMOTOS' },
        { href: '/company', text: 'EMPRESA' }
      ]

  return (
    <div className={`header ${montserrat.className}`}>
        <div className="internal-header">
            <div className='top-header'>
            <Link className="logo-placement" href="/">
                <Image src={logo} width="200px" height="100px" className='main-logo' loading='eager'/>
            </Link>
            <div className='secondary-header'>
                <div className='header-contacts'>Ligue Agora | TEL: +55 21 90000-0000</div>
                <Login/>
            </div>
            </div>
        </div>
        <div className='external-header'>
            <div className='bottom-header'>
                {links.map(({ href, text}) => (
                <div className='links-pages' key={href}>
                     <Link href={href} className={pathnamed === href ? 'link-header active-link' : "link-header"}>{text}</Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
