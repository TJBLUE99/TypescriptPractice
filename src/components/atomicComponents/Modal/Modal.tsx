import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface ModalProps {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  handleChange: () => Promise<boolean>;
  modalType: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  onClose,
  handleChange,
  isOpen,
}) => {
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleChange}>
        {title}
      </Button>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
