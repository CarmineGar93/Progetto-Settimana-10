import { Container, Row, Col } from "react-bootstrap"
import MyMeteo from "./MyMeteo"

function MyMeteoDefault(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                {
                    !props.searched ? (
                        <>
                            <MyMeteo searched={'Milan'} nation={'IT'} handleId={props.handleId}/>
                            <MyMeteo searched={'London'} nation={'GB'} handleId={props.handleId}/>
                            <MyMeteo searched={'Minsk'} nation={'BY'} handleId={props.handleId}/>
                            <MyMeteo searched={'New York'} nation={'US'} handleId={props.handleId}/>
                        </>
                       
                    ) : (
                        <MyMeteo searched={props.searched} nation={props.nation} handleId={props.handleId}/>
                    )
                }
                    
                </Col>
            </Row>
        </Container>
    )
}

export default MyMeteoDefault