import {Container, Row, Col} from 'react-bootstrap'

function Welcome() {
    return (
        <Container fluid className='mb-5 bg-dark text-light border-top border-1 border-secondary py-5'>
            <Row className=' justify-content-center'>
                <Col xs={12} className='text-center Welcome'>
                    <h2>Benvenuto/a in MyMeteo.com!</h2>
                    <h6>Siamo felici che tu abbia scelto noi. Prego dai un'occhiata al meteo delle principali città d'Italia </h6>
                    <h6>In alternativa cerca la tua città attraverso la barra di ricerca in alto </h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome