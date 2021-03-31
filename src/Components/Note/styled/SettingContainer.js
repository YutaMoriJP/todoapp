import styled from "styled-components";

const SettingContainer = styled.article`
  padding: 10px;
  max-width: 450px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    section {
      align-self: center;
      display: flex;
      gap: 2px;
      button {
        padding: 0;
      }
      svg {
        align-self: center;
      }
    }
  }
  @media screen and (max-width: 320px) {
    padding: 2px;
  }
`;

export default SettingContainer;
