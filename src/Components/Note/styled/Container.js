import styled from "styled-components";

const Container = styled.article`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-flow: row wrap;
  section {
    align-self: center;
  }
  article {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;

export default Container;
