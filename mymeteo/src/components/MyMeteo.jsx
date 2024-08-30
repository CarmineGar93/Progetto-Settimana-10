import { Container, Row, Col, Spinner} from "react-bootstrap"
import { useEffect, useState } from 'react'
import rain from '../logos/rain.svg'
import cloudy from '../logos/cloudy.svg'
import sunny from '../logos/sunny.svg'
import cloudsun from '../logos/cloudsun.svg'
import { Link, useNavigate } from "react-router-dom"

function MyMeteo({ searched, nation }) {
    const kToC = (k) => {
        return (k - 273.15).toFixed(2)
    }
    const navigate = useNavigate()
    const [meteo, setMeteo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const retrieveMeteo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searched},${nation}&appid=0594cf0ca3334f8707602414bc4f5210`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setMeteo(data)
                setIsLoading(false)
            } else {
                throw new Error('Errore')
            }
        } catch (err) {
            console.log(err)
            navigate('/Notfound')

        }
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dicember']
    const date = new Date()
    const handleSvg = (meteo) => {
        switch (meteo) {
            case 'Clear':
                return sunny;
            case 'Clouds':
                return cloudy;
            case 'Rain':
                return rain;
            default:
                return cloudsun
        }
    }

    useEffect(() => {
        retrieveMeteo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searched])
    return (
        <>
            {
                isLoading ? (
                    <Container fluid>
                        <Row className=" justify-content-center">

                            <Col xs={12} md={8}>
                                <Spinner animation="border" variant="dark" />
                            </Col>
                        </Row>

                    </Container>
                ) : (
                    <Container>
                        <Row>
                            <Col xs={12} className=" text-lef mb-3">
                                <h1 className="mb-0">Wheather {meteo.name}</h1>
                                <h5>{`${days[date.getDay()]}  ${date.getDate()} ${months[date.getMonth()]}`} </h5>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Row className="mb-3">
                                    <Col xs={12} className="mb-3">
                                        <img alt="" src={handleSvg(meteo.weather[0].main)} />
                                    </Col>
                                    <Col xs={12}>
                                        <p className="fs-1">{kToC(meteo.main.temp)}<sup>°C</sup></p>
                                    </Col>
                                    <Col xs={12}>
                                        <h6 className="mb-0">Humidity: {meteo.main.humidity}%</h6>
                                        <h6 className="mb-0">Feels like: {kToC(meteo.main.feels_like)}<sup>°C</sup></h6>
                                        <h6 className="mb-0">Wind speed {meteo.wind.speed}<sup>km/h</sup></h6>
                                    </Col>

                                </Row>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Row>
                                    <Col xs={12} className="mb-3 text-lg-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
                                            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                            <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
                                        </svg>
                                        <p className="fs-3 d-inline">Min {kToC(meteo.main.temp_min)}<sup>°C</sup></p>
                                    </Col>
                                    <Col xs={12} className="mb-3 text-lg-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" className="bi bi-thermometer-high" viewBox="0 0 16 16">
                                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415" />
                                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                                        </svg>
                                        <p className="fs-3 d-inline">Max {kToC(meteo.main.temp_max)}<sup>°C</sup></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mb-5">
                            <Col xs={12} className="text-center">
                                <Link to={`/details/${meteo.id}`} className="nav-underline text-info">Click here to see weekly weather</Link>
                            </Col>
                        </Row>

                    </Container>
                )
            }
        </>
    )
}

export default MyMeteo