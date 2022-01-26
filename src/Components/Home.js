import React from "react";
import styled from "styled-components";
import Sections from "./Sections";

function Home() {
  return (
    <Container>
      <Sections />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
