import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Setting from "./Setting";

const Header = styled.header`
  display: flex;
`;

const Close = styled(IconButton)`
  && {
    margin-left: auto;
  }
`;

export default function InfoBox({
  order,
  open,
  handleClose,
  setColor,
  setOrder,
}) {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Header>
          <Close onClick={handleClose}>
            <CloseIcon />
          </Close>
        </Header>
        <Setting setColor={setColor} setOrder={setOrder} order={order} />
      </Dialog>
    </>
  );
}
