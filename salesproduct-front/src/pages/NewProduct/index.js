import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import Button from "../../styles/components/Button";
import { Container, SignForm, Content } from "./styles";
import Navigation from "../../components/Navigation";

export default function NewProduct({ history }) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/ads`, product);
      history.push("/index");
    } catch (err) {
      toast.error("Erro ao cadastrar produto!");
    }
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setProduct({
      ...product,
      [id]: value
    });
  }

  return (
    <Container>
      <Navigation />

      <Content>
        <SignForm onSubmit={handleSubmit}>
          <h1>Cadastro de produto</h1>

          <span>NOME</span>
          <input
            id="title"
            value={product.title}
            required
            onChange={handleInputChange}
          />

          <span>DESCRIÇÃO</span>
          <input
            id="description"
            value={product.description}
            required
            onChange={handleInputChange}
          />

          <span>PREÇO</span>
          <input
            id="price"
            type="number"
            value={product.price}
            required
            onChange={handleInputChange}
          />

          <Button size="big" onClick={handleSubmit} type="submit">
            Cadastrar
          </Button>
        </SignForm>
      </Content>
    </Container>
  );
}
