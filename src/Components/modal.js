import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styling/globals.scss';
import '../styling/modal.scss';

import { useSelector } from 'react-redux';

export const UploadFile = ({open, close, save}) => {
    const { image } = useSelector((state) => state.newUpload);

    if(!open) return null;
    return(
        <>
            <div>
                <Modal 
                show={open}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header className="flex-c ">
                        <Modal.Title>Upload me?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="flex-c">
                        <img 
                        src={ image.payload } 
                        alt={ image.payload } 
                        className="flex-c"/>
                    </Modal.Body>
                    <Modal.Footer className="flex-sb">
                        <Button onClick={close} variant="outline-danger">Cancel</Button>
                        <Button onClick={save} variant="outline-success">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}