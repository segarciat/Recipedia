import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ModalFormWrap = ({ title, show, onCancel, onSubmit, children }) => {
  return (
    <>
      <Modal size="lg" show={show} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={onSubmit}>
            {children}
            <Modal.Footer>
              <Button variant="secondary" type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalFormWrap;
