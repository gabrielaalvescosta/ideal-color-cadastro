"use client"
import React from 'react';
import DeviceWrapper from '../../src/app/components/mobile/SimulacaoDevice'
import Cadastro from './pages/cadastro/Cadastro'
import Wrapper from './components/wrapper/Wrapper';

export default function HomePage() {
  return (
    <Wrapper>
    <DeviceWrapper>
      <Cadastro/>
    </DeviceWrapper>
    </Wrapper>
  );
}