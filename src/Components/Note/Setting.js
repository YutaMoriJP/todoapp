import React from "react";
import SettingContainer from "./styled/SettingContainer";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";

const P = styled.p`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const Setting = ({ setColor, setOrder, order }) => {
  const pickGreen = () => setColor("#d3f9d8");
  const pickYellow = () => setColor("#ffec99");
  const pickPurple = () => setColor("#e5dbff");
  const pickOrder = event => {
    setOrder(event.target.innerText.toLowerCase());
  };
  return (
    <SettingContainer>
      <article>
        <p>Note Background</p>
        <section>
          <P color="#d3f9d8" onClick={pickGreen}></P>
          <P color="#e5dbff" onClick={pickPurple}></P>
          <P color="#ffec99" onClick={pickYellow}></P>
        </section>
      </article>
      <article>
        <p>Sort by</p>
        <section>
          <Button onClick={pickOrder}>
            {order === "top" ? "bottom" : "top"}
          </Button>
          {order === "top" ? (
            <VerticalAlignBottomIcon />
          ) : (
            <VerticalAlignTopIcon />
          )}
        </section>
      </article>
    </SettingContainer>
  );
};

export default Setting;
