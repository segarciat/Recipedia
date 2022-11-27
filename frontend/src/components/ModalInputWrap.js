import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalInputWrap = ({ title, onCancel, onSave, children }) => {
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    onCancel(e);
    setShow(false);
  };

  const handleSave = (e) => {
    onSave(e);
    setShow(false);
  };

  const handleShow = (e) => {
    setShow(true);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInputWrap;
