import styled from "styled-components";

export const ContainerNavigation = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  /*overflow-y: scroll;*/

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    h1 {
      font-size: 20px;
    }

    div {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const Product = styled.div`
  color: #a09d9d;
  background: #fff;
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;

  p {
    font-size: 18px;
  }
`;
