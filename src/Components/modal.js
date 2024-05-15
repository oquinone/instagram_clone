import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styling/globals.scss";
import "../styling/modal.scss";

import { useImageUploadState } from "../zucstand/store";

export const UploadFile = ({ open, close, save }) => {
  const image = useImageUploadState((state) => state.image);

  if (!open) return null;
  return (
    <>
      <div>
        <Modal show={open} backdrop="static" keyboard={false}>
          <Modal.Header className="flex-c ">
            <Modal.Title>Upload me?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="flex-c">
            <img src={image} alt={image} className="flex-c" />
            {/* <img src={image} alt={image} className="flex-c" /> */}
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
      </div>
    </>
  );
};
