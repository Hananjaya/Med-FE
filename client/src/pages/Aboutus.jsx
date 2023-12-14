import { useContext } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import UserChat from '../components/chat/UserChat';
import PotentialChats from '../components/chat/potentialChats';
import ChatBox from './../components/chat/chatBox';

const Aboutus = () => { 
    return (
        <Container>
            <h1>About us</h1>
        </Container>
    );
}

export default Aboutus;