import { Col } from 'react-bootstrap';
import HeroImage from '../assets/hero.png';

const Home = () => { 
    return (
        <header>
            <Col>
                <img src={HeroImage} class="img-fluid" alt="hero-img"/>
            </Col>
        </header>
    );
}

export default Home;