import React from "react";
import actions from "../reducer/actions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import PaperStyled from "./styled/styledPaper";
import useStyle from "./styled/useStyle";

const NoteDisplay = ({ id, title, value, done, noteDispatch, color }) => {
  const handleRemove = () => {
    noteDispatch({ type: actions.REMOVE, payload: { id } });
  };
  const handleDone = () => {
    noteDispatch({ type: actions.DONE, payload: { id } });
  };
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <PaperStyled elevation={10} done={done ? 1 : 0} color={color}>
        <h3>{title}</h3>
        <p>{value}</p>
        <Button
          onClick={handleRemove}
          endIcon={<DeleteIcon />}
          className={classes[done ? "checked" : "deleteButton"]}
        >
          Remove
        </Button>
        <Button
          onClick={handleDone}
          endIcon={<DoneIcon />}
          className={classes[done ? "checked" : "checkButton"]}
        >
          {done ? "uncheck" : "check"}
        </Button>
      </PaperStyled>
    </Grid>
  );
};

export default NoteDisplay;
