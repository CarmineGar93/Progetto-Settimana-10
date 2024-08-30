import {Container, Row, Col} from 'react-bootstrap'

function Welcome() {
    return (
        <Container fluid className='mb-5 bg-dark text-light border-top border-1 border-secondary py-5'>
            <Row className=' justify-content-center'>
                <Col xs={12} className='text-center Welcome'>
                    <h2>Welcome in MyMeteo.com!</h2>
                    <h6>We're glad you're here. Have a look at the most important city's weather</h6>
                    <h6>Or look at your favourite city's weather typing it in the search bar up ahead !</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome