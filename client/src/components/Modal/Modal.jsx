import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';

const modalRoot= document.getElementById('modal-root');

const ModalRoot = styled.div`
  position:relative;
  z-index:999;
`;

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.el = document.createElement('ModalRoot');
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