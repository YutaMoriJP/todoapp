import React from "react";
import Container from "./styled/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SettingsIcon from "@material-ui/icons/Settings";

const NoteInput = ({
  handleOpen,
  title,
  handleSubmit,
  content,
  handleKeyPress,
}) => {
  return (
    <>
      <Container onKeyPress={handleKeyPress}>
        <article>
          <TextField label="Write Title here..." type="text" {...title} />
          <TextField
            label="Write Description here..."
            type="text"
            {...content}
          />
        </article>
        <section>
          <Button
            onClick={handleSubmit}
            endIcon={<AddIcon />}
            color="primary"
            variant="contained"
            disabled={!/[\w]/.test(content.value) || !/[\w]/.test(title.value)}
          >
            Submit
          </Button>
          <Button onClick={handleOpen} endIcon={<SettingsIcon />}>
            Setting
          </Button>
        </section>
      </Container>
    </>
  );
};

export default NoteInput;
