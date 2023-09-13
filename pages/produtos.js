import StyledInput from '@/app/components/input/Input';
import ProdutoThumb from '@/app/components/produto/ProdutoThumb';
import React, {useState } from 'react';
import DeviceWrapper from '@/app/components/mobile/SimulacaoDevice';
import Wrapper from '@/app/components/wrapper/Wrapper';
import NavigatorMenu from '@/app/components/navigator/NavigatorMenu'
import Titulo from '@/app/components/titulo/Titulo';
import StyledButton from '@/app/components/botao/Botao';

export default function Produtos() {
  
  const [produto, setProduto] = useState('');



  const handleChange = (e) => {
    const { login, value } = e.target;
    setProduto({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <Wrapper>
    <DeviceWrapper>
        <Titulo h2="Produtos"/>
        <StyledInput
            label="Digite o nome do produto..."
            name="nome"
            value={produto}
            onChange={handleChange}
        />
              <StyledButton label="Enviar Cadastro" onClick={handleSubmit} />
        <ProdutoThumb/>
        <NavigatorMenu/>
    </DeviceWrapper>
    </Wrapper>
  )
}
