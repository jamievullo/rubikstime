import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modal1 = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div style={{textAlign: 'center'}}>
        <span onClick={toggle}>Help</span>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader style={{color: '#364182'}} toggle={toggle}>rubikstime.com Help</ModalHeader>
            <ModalBody style={{color: '#364182'}}>
                <p>Hello, and Welcome to Rubiks Time!</p> 
                <p>To get started, select the cube you would like to keep track of and change cubes as often as you would like.
                Press and hold the spacebar to set the timer and let go to start timing. 
                Press the spacebar again quickly to stop the timer and record your time.</p>
                <p>Before you exit, please consider registering for Rubiks Time to take advantage of the extras including complete
                tracking history of your times on all cubes!</p> 
                <p>And please, don't forget to check out the awesome deals in our Merch shop!!</p>
            </ModalBody>
            <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            {/* <Button style={{backgroundColor: '#ffc600', color: '#364182'}} onClick={toggle}>Exit</Button> */}
            </ModalFooter>
        </Modal>
        </div>
    );
}

export default Modal1;