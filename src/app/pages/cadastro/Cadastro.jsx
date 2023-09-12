import React, { useState } from 'react';
import StyledSelectComponent from '../../components/select/Select'
import StyledInput from '@/app/components/input/Input';
import StyledButton from '@/app/components/botao/Botao';
import Titulo from '@/app/components/titulo/Titulo';

const colorOptions = [
  { label: 'Vermelho', value: 'red' },
  { label: 'Verde', value: 'green' },
  { label: 'Azul', value: 'blue' },
];

const categoryOptions = [
  { label: 'Eletrônicos', value: 'electronics' },
  { label: 'Roupas', value: 'clothing' },
  { label: 'Alimentos', value: 'food' },
];

export default function ProductForm() {
  const [productInfo, setProductInfo] = useState({
    name: '',
    price: '',
    color: '',
    url: '',
    category: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log(productInfo);
  };

  return (
    <div>
      <Titulo h2="Cadastro de Produtos"/>
      <StyledInput
        label="Nome do Produto"
        name="name"
        value={productInfo.name}
        onChange={handleChange}
      />
      <StyledInput
        label="Preço do Produto"
        name="price"
        value={productInfo.price}
        onChange={handleChange}
      />
      <StyledSelectComponent
        label="Cartela de Cores"
        options={colorOptions}
        value={productInfo.color}
        onChange={handleChange}
      />
      <StyledInput
        label="URL do Produto"
        name="url"
        value={productInfo.url}
        onChange={handleChange}
      />
      <StyledSelectComponent
        label="Categoria do Produto"
        options={categoryOptions}
        value={productInfo.category}
        onChange={handleChange}
      />
      <StyledInput
        label="Quantidade Disponível"
        name="quantity"
        value={productInfo.quantity}
        onChange={handleChange}
      />
      <StyledButton label="Enviar Cadastro" onClick={handleSubmit} />
    </div>
  );
}
