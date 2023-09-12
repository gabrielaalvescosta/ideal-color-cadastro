import StyledInput from '@/app/components/input/Input';
import ProdutoThumb from '@/app/components/produto/ProdutoThumb';
import React from 'react';

export default function Produtos() {
  return (
    <div>
        <Titulo h2="Produtos"/>
        <StyledInput
            label="Digite o nome do produto..."
            name="nome"
            value={productInfo.nome}
            onChange={handleChange}
        />
              <StyledButton label="Enviar Cadastro" onClick={handleSubmit} />
        <ProdutoThumb/>
    </div>
  )
}
