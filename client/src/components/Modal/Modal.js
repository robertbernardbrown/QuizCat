import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

class FeedbackModal extends Component {
    render() {
      return (
        <div>  
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>You lose!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Nice try, idiot</h4>
              <p>
                Maybe get smarter next time
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

  export default FeedbackModal;