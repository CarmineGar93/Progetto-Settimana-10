import {Container, Row, Col} from 'react-bootstrap'

function Welcome() {
    return (
        <Container className='my-4'>
            <Row className=' justify-content-center'>
                <Col xs={12} md={8} className='text-center border border-3 Welcome'>
                    <h1>Benvenuto/a in MyMeteo.com!</h1>
                    <h5>Siamo felici che tu abbia scelto noi. Prego dai un'occhiata al meteo delle principali città d'Italia </h5>
                    <h5>In alternativa cerca la tua città attraverso la barra di ricerca in alto </h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome