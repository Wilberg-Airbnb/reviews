import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';

const modalRoot= document.getElementById('reviewmodal-root');

const ModalRoot = styled.div`
  position:relative;
`;

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.el = document.createElement('ReviewModalRoot');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render(){
    return ReactDOM.createPortal(this.props.children,this.el)
  }
}

export default Modal