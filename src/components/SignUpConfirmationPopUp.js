import React, { Component } from "react";

export default class SignUpConfirmationPopUp extends Component {

handleClick = () => {
   this.props.toggle();
   console.log("Hell ya");
};


render() {

  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>
  );

 }

}