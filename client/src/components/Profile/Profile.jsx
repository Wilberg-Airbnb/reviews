import React from 'react';
// import './Profile.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import styled from 'styled-components';

const ProfileModal = styled.div`
  background-color: rgba(255,255,255,0.9);
  position:fixed;
  height:100%;
  width:100%;
  top:0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height:40%;
  width:30%;
  border-style: solid;
  background-color: white;
`;

const Profile = ({modalOpen, toggleModal}) =>{
return (
  <ProfileModal>
    <Container>
    <ListGroup >
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <button onClick={toggleModal}>Click to untoggle</button>
    </Container>
  </ProfileModal>
)
}

export default Profile;