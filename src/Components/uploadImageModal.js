import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styling/globals.scss";
import "../styling/modal.scss";
import { useImageUploadStore } from "../store/store";

export const UploadFile = ({ open, close, save }) => {
  const imageStore = useImageUploadStore();

  if (!open) return null;
  return (
    <Modal show={open} backdrop="static" keyboard={false}>
      <Modal.Header className="flex-c ">
        <Modal.Title>Upload me?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="flex-c">
        <img
          src={imageStore.image}
          alt="selected"
          className="flex-c"
          style={{ width: "350px", height: "350px", objectFit: "contain" }}
        />
      </Modal.Body>
      <Modal.Footer className="flex-sb">
        <Button onClick={close} variant="outline-danger">
          Cancel
        </Button>
        <Button onClick={save} variant="outline-success">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
