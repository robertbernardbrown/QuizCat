import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";
import angrycat from "../../assets/side-face-angry-cat.png";
import surprisecat from "../../assets/surprise-cat.png";
import PropTypes from 'prop-types';

class FeedbackModal extends Component {
    render() {
      return (
        <div> 
          {this.props.winner ? 
            //winner modal shows win message
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>You...win?!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div id="cat-div">
                  <img id="cat-img" src={surprisecat} alt="angry cat"/>
                </div>
                <div className="model-content">
                  <h4>That's actually surprising.</h4>
                  <p>
                    We might have underestimated you.<br/>
                    You took {this.props.timer} to finish the quiz.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal> 
            :
            //loser modal shows lose message
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>You lose!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div id="cat-div">
                  <img id="cat-img" src={angrycat} alt="angry cat"/>
                </div>
                <div className="model-content">
                  <h4>Nice try, dummy.</h4>
                  <p>
                    Maybe get smarter next time!
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          } 
        </div>
      );
    }
  }

  FeedbackModal.propTypes = {
    winner: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    timer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  };

  export default FeedbackModal;