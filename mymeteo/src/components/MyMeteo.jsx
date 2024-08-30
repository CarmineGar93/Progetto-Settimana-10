import { Container, Row, Col } from "react-bootstrap"
import {useEffect, useState} from 'react'

function MyMeteo({searched}) {
    const[meteo, setMeteo] = useState({})
    const retrieveMeteo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searched},IT&appid=0594cf0ca3334f8707602414bc4f5210`)
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                setMeteo(data) 
            }
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        retrieveMeteo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searched])
    return (
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MyMeteo