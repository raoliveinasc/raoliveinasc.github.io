import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Login from './Login'
import logo from "../public/main-logo.jpg"
import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['200', '300', '400','500', '600', '700', '800'],
    subsets: ['latin']
})


export default function Header({pathnamed}) {

    const links = [
        { href: '/', text: 'INÍCIO' },
        { href: '/budget', text: 'ORÇAMENTO' },
        { href: '/agendamento', text: 'AGENDAMENTO' },
        { href: '/services', text: 'SERVIÇOS' },
        { href: '/company', text: 'EMPRESA' }
    ]

    const [navHeight, setNavHeight] = useState({
        logoWidth: "200px",
        navbarHeight: "140px"
    });

    useEffect(() => {
        const handleScroll = () => {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            setNavHeight({
                logoWidth: "150px",
                navbarHeight: "100px",
            });
        } else {
            setNavHeight({
                logoWidth: "200px",
                navbarHeight: "140px",
            });
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <div className={`header ${montserrat.className}`} style={{ height: navHeight.navbarHeight }}>
        <div className="internal-header">
            <div className='top-header'>
            <Link className="logo-placement" href="/">
                <Image alt="OttoMotos serviços" src={logo} width="200px" height="100px" className='main-logo' loading='eager' style={{ width: navHeight.logoWidth }}/>
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
