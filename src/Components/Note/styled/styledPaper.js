import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const PaperStyled = styled(Paper)`
  && {
    margin: 10px;
    background-color: ${props => (props.done ? "grey" : props.color)};
    padding: 2px;
    word-break: break-all;
  }
`;
//    background-color: ${props => (props.done ? "grey" : props.purple)};

export default PaperStyled;
