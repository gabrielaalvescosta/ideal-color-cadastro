import React, { useState } from 'react';
import InputCadastro from '../../components/input'
import StyledSelectComponent from '../../components/select'

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
    // Lógica para enviar a requisição POST com as informações do produto
    console.log(productInfo);
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <InputCadastro
        label="Nome do Produto"
        name="name"
        value={productInfo.name}
        onChange={handleChange}
      />
      <InputCadastro
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
      <InputCadastro
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
      <InputCadastro
        label="Quantidade Disponível"
        name="quantity"
        value={productInfo.quantity}
        onChange={handleChange}
      />
      <Botao label="Enviar Cadastro" onClick={handleSubmit} />
    </div>
  );
}
