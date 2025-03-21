import React,{ useState} from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";
import {
ButtonGroup,
Button, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

const Footer = () => {
  const [modal, setModal] = useState(false);
  const [ppModal, setPpModal]=useState(false);
  const [discModal, setDiscModal]=useState(false);

  const toggle = () => setModal(!modal);
  
  const togglePP = ()=>setPpModal(!ppModal);
  
  const toggleDisc=()=>setDiscModal(!discModal);
	
	
  return (
    <div className={s.footer}>
	<ButtonGroup >
  <Button onClick={toggle}>
    Terms and Condition
  </Button>
  <Button onClick={togglePP}>
    Privacy Policy
  </Button>
  <Button onClick={toggleDisc}>
    Disclaimer
  </Button>
</ButtonGroup>
      <Modal isOpen={modal} toggle={toggle} fullscreen="true">
        <ModalHeader toggle={toggle}>Terms and Condition</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={toggle}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
      <Modal isOpen={ppModal} toggle={togglePP} fullscreen="true">
        <ModalHeader toggle={togglePP}>Privacy Policy</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={togglePP}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={togglePP}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
      <Modal isOpen={discModal} toggle={toggleDisc} fullscreen="true">
        <ModalHeader toggle={toggleDisc}>Privacy Policy</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={toggleDisc}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={toggleDisc}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
		 
    </div>
  )
}

export default Footer;
