import { useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const NotFound = ({handleResearch, handleNation}) => {
    const navigate = useNavigate()
    useEffect(() => {
        handleResearch('')
        handleNation('')
    })
    return (
        <Container>
            <Row className="justify-content-center my-4">
                <Col xs={12} md={6} className="text-center">
                    <h2 className="mb-4">404 - Not Found</h2>
                    <h4 className="mb-3">Invalid city - Please return to the homepage and try again</h4>
                    <Button variant="danger" onClick={() => {navigate('/')}}>
                        Homepage
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound