import React from 'react';

import { MdAccountCircle } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <img src={logo} alt="facebook" />
        <div>
          <span>Meu Perfil</span>
          <MdAccountCircle size={36} color="#fff" />
        </div>
      </header>
    </Container>
  );
}
