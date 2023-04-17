import Link from 'next/link';
import React, { useState } from 'react';
import Login from './Login';

export default function BurgerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="burger-menu">
      <button onClick={handleSidebarOpen} className="burger-button-menu">
        <i class="fa-regular fa-bars-staggered fa-xl"></i>
      </button>
        <>
        <div className={`sidebar ${isSidebarOpen ? 'opened' : 'not-opened'}`}>
            <div className='login-section-sidebar'>
                <Login/>
            </div>
            <div className='access-sidebar'>
                <Link href="/">Início</Link>
            </div>
            <div className='access-sidebar'>
                <Link href="/budget">Orçamento</Link>
            </div>
            <div className='access-sidebar'>
                <Link href="/agendamento">Agendamento</Link>
            </div>
            <div className='access-sidebar'>
                <Link href="/services">Serviços</Link>
            </div>
            <div className='access-sidebar'>
                <Link href="/company">Empresa</Link>
            </div>
        </div>
        {isSidebarOpen ? (<div className='body-overlay' onClick={handleSidebarOpen}></div>) : null}
        </>
    </div>
  );
};

