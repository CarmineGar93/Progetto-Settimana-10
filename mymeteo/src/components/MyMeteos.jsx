import { Container, Row, Col } from "react-bootstrap"
import MyMeteo from "./MyMeteo"

function MyMeteos(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <MyMeteo searched='Sorrento' />
                </Col>
            </Row>
        </Container>
    )
}

export default MyMeteos