import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import { ContentHeader } from './styles';
import { Container } from '../../styles/global';

export function Header(){
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <Container>
      <ContentHeader showMenu={showMenu}>
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

        <Hamburger 
          rounded 
          toggled={showMenu} 
          toggle={setShowMenu} 
          duration={0.8} 
        />

        {showMenu && (
        <nav className="responsive-navbar">
          <ul>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#home">Home</a></li>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#teraph">Teraph</a> </li>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#functionalities">Funcionalidades</a></li>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#testimony">Depoimentos</a></li>
            <li><a onClick={() => setShowMenu(!showMenu)} href="#plans">Planos</a></li>
          </ul>
        </nav>
      )}
      </ContentHeader>
    </Container>
  );
}