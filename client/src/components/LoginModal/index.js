import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./style.css";
import Login from '../auth/Login';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const LoginModal = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop}>
        <ModalHeader toggle={toggle}></ModalHeader>
        {/* <ModalBody> */}
          <Login />
        {/* </ModalBody> */}
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LoginModal;
