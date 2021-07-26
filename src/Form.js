import React from 'react';
import { Button, Modal, ModalFooter } from 'react-bootstrap';
class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                
                <Button onClick={() => { this.handleModal() }}>open modal</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>(modal) Fill the form</Modal.Header>
                    <Modal.Body>hey modal body is here</Modal.Body>
                    <ModalFooter>
                        <Button onClick={() => { this.handleModal() }} >close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default Form;