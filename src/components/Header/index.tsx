import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container } from '../../styles/global';

import { ContentHeader } from './styles'

export function Header(){
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn')!;
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBtn.classList.add('fixed');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuBtn.classList.remove('fixed');
        menuOpen = false;
      }
    });
  }, []);

  return (
    <Container>
      <ContentHeader>
        <Image src="/logo.svg" alt="logo" width={60} height={60} />

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#teraph">Teraph</a> </li>
            <li><a href="#functionalities">Funcionalidades</a></li>
            <li><a href="#testimony">Depoimentos</a></li>
            <li><a href="#plans">Planos</a></li>
          </ul>

          <button>Login</button>
        </nav>

        <div
          className="menu-btn"
          onClick={() => toggleMenu()}
        >
          <div className="menu-btn__burger" />
        </div>

        {showMenu && (
        <nav className="responsive-navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#teraph">Teraph</a> </li>
            <li><a href="#functionalities">Funcionalidades</a></li>
            <li><a href="#testimony">Depoimentos</a></li>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#plans">Planos</a></li>
          </ul>
        </nav>
      )}
      </ContentHeader>
    </Container>
  );
}