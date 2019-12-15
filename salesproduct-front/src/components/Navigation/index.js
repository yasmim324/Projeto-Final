import React from "react";
import { Link } from "react-router-dom";
import { Container, Logout } from "./styles";

export default function Navigation() {

  return (
    <Container>
      <Link to="/">
        <Logout>Sair</Logout>
      </Link>
      <Link to="/index">
        <Logout>Prod</Logout>
      </Link>
      <Link to="/signup">
        <Logout>User</Logout>
      </Link>
    </Container>
  );
}
