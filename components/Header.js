import Image from 'next/image'
import Link from 'next/link'
import Login from './Login'
import logo from "../public/main-logo.jpg"

export default function Header() {

  return (
    <div className="header">
        <div className="internal-header">
            <div className='top-header'>
            <Link className="logo-placement" href="/">
                <Image src={logo} width="200px" height="100px" className='main-logo'/>
            </Link>
            <div className='secondary-header'>
                <div className='header-contacts'>Ligue Agora | TEL: 123-456-7890</div>
                <Login/>
            </div>
            </div>
        </div>
        <div className='external-header'>
            <div className='bottom-header'>
                <div className='links-pages'>
                    <Link href="/" className="link-header active-link">INÍCIO</Link>
                </div>
                <div className='links-pages'>
                    <Link href="/budget" className="link-header">ORÇAMENTO</Link>
                </div>
                <div className='links-pages'>
                    <Link href="/" className="link-header">SERVIÇOS</Link>
                </div>
                <div className='links-pages'>
                    <Link href="/" className="link-header">MINHA OTTOMOTOS</Link>
                </div>
                <div className='links-pages'>
                    <Link href="/" className="link-header">EMPRESA</Link>
                </div>
                <div className='links-pages'>
                    <Link href="/" className="link-header">CONTATO</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
