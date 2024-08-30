import { Container, Row, Col } from "react-bootstrap"
import MyMeteo from "./MyMeteo"

function MyMeteos(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                {
                    !props.searched ? (
                        <>
                            <MyMeteo searched={'Milan'} nation={'IT'}/>
                            <MyMeteo searched={'London'} nation={'GB'}/>
                            <MyMeteo searched={'Minsk'} nation={'BY'}/>
                            <MyMeteo searched={'New York'} nation={'US'}/>
                        </>
                       
                    ) : (
                        <MyMeteo searched={props.searched} nation={props.nation}/>
                    )
                }
                    
                </Col>
            </Row>
        </Container>
    )
}

export default MyMeteos