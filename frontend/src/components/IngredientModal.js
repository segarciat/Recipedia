import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import IngredientInput from './IngredientInput';

const IngredientModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Ingredient
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Ingredient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <IngredientInput />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IngredientModal;
