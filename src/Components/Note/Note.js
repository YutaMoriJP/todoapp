import React, { useReducer, useState } from "react";
import useInput from "../useHooks/useInput";
import noteReducer from "../reducer/noteReducer";
import actions from "../reducer/actions";
import { v4 as uuidv4 } from "uuid";
import NoteDisplay from "./NoteDisplay";
import Grid from "@material-ui/core/Grid";
import NoteInput from "./NoteInput";
import InfoBox from "./InfoBox";

const Note = () => {
  const [color, setColor] = useState("#ffec99");
  const [order, setOrder] = useState("bottom");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [content, resetContent] = useInput("");
  const [title, resetTitle] = useInput("");
  const reset = () => {
    resetContent();
    resetTitle();
  };
  const [notes, noteDispatch] = useReducer(noteReducer, []);
  const handleSubmit = () => {
    if (!/[\w]/.test(content.value) || !/[\w]/.test(title.value)) {
      alert(
        !/[\w]/.test(content.value) && !/[\w]/.test(title.value)
          ? "Title & Note are missing."
          : !title.value.length
          ? "Title is missing."
          : "Note is missing."
      );
      return;
    }
    noteDispatch({
      type: actions.ADD,
      payload: { title: title.value, value: content.value, id: uuidv4() },
    });
    reset();
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const rendersNotes = order => {
    if (order === "top") {
      return [...notes]
        .reverse()
        .map(note => (
          <NoteDisplay
            color={color}
            key={note.id}
            {...note}
            noteDispatch={noteDispatch}
          />
        ));
    } else {
      return [...notes].map(note => (
        <NoteDisplay
          color={color}
          key={note.id}
          {...note}
          noteDispatch={noteDispatch}
        />
      ));
    }
  };
  return (
    <>
      <h1>Note Taking App</h1>
      <NoteInput
        title={title}
        content={content}
        handleKeyPress={handleKeyPress}
        handleSubmit={handleSubmit}
        handleOpen={handleOpen}
      />
      <Grid container spacing={2} justify="center">
        {notes.length > 0 && rendersNotes(order)}
      </Grid>
      <InfoBox
        open={open}
        handleClose={handleClose}
        setColor={setColor}
        color={color}
        setOrder={setOrder}
        order={order}
      />
    </>
  );
};

export default Note;
