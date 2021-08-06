import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ImageModal = ({open, close, remove, image}) => {

    if(!open) return null;

    return(
        <>
            <Modal 
            show={open}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header className="flex-c ">
                    <Modal.Title>Delete Me?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex-c">
                    <img 
                    src={ image } 
                    alt={ image } 
                    className="flex-c"/>
                </Modal.Body>
                <Modal.Footer className="flex-sb">
                    <Button onClick={close} variant="outline-danger">Cancel</Button>
                    <Button onClick={remove} variant="outline-success">Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}