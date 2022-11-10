
import { Fragment } from 'react';
import './App.css';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from '../node_modules/react-bootstrap/';

function App() {
  return (
    <Fragment>
      <Container>
          <Row>
            <h1>Aca va el header</h1>
          </Row>
          <Row>
            <h1>Aca va el body</h1>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
          
          
          

    </Fragment>
  );
}

export default App;
