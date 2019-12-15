import React from "react";

import { Container, ContainerNavigation, Product } from "./styles";
import Button from "../../styles/components/Button";
import api from "../../services/api";
import Navigation from "../../components/Navigation";

let data = [];

export default function Produtos({ history }) {
  async function handleSubmitProduct() {
    history.push("/products");
  }

  async function handleSubmitUser() {
    history.push("/signup");
  }

  const loadAds = setTimeout(async function() {
    const response = await api.get("/products");
    data = response.data.docs;
    console.log(data);
  }, 1000);

  return (
    <div>
      <ContainerNavigation>
        <Navigation />
        <Container>
          <header>
            <h1>Produtos:</h1>
            <div>
              <Button onClick={handleSubmitUser}>+ Usuário</Button>
              <Button onClick={handleSubmitProduct}>+ Produto</Button>
            </div>
          </header>
          <div>
            {data.map(function(object) {
              return (
                <Product key={object._id}>
                  <p>Nome: {object.name}</p>
                  <p>Descrição: {object.description}</p>
                  <p>Preço: R$ {object.price}</p>
                  <p>Vendedor: {object.salesman.name}</p>
                </Product>
              );
            })}
          </div>
        </Container>
      </ContainerNavigation>
    </div>
  );
}
