import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import rain from '../logos/rain.svg'
import cloudy from '../logos/cloudy.svg'
import sunny from '../logos/sunny.svg'
import cloudsun from '../logos/cloudsun.svg'

function WeeklyMeteo() {
    const [meteo, setMeteo] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()
    const fetchWeek = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${params.city}&appid=0594cf0ca3334f8707602414bc4f5210`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setMeteo(data)
                setIsLoading(false)
                const filter = data.list.filter((list) => {
                    return list.dt_txt.includes('15:00')
                })
                setList(filter)
            } else {
                throw new Error('errore')
            }
        } catch (err) {
            console.log(err)
            navigate('/Notfound')
        }
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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
    const kToC = (k) => {
        return (k - 273.15).toFixed(2)
    }

    useEffect(() => {
        fetchWeek()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                isLoading ? (
                    <Container fluid className="my-3">
                        <Row className=" justify-content-center">

                            <Col xs={12} md={8} className="text-center">
                                <Spinner animation="border" variant="dark" />
                            </Col>
                        </Row>

                    </Container>
                ) : (
                    <Container className="my-3">
                        <Row>
                            <Col className="mb-5">
                                <h1>{meteo.city.name}</h1>
                                <h4>Next 5 days report</h4>
                            </Col>
                        </Row>
                        <Row className="mb-4" xs={1} sm={2} md={5}>
                            {
                                list.map((weather) => {
                                    return (
                                        <Col key={weather.dt}>
                                            <Row>
                                                <Col xs={12}>
                                                    <h5>{days[new Date(weather.dt_txt).getDay()]}</h5>
                                                </Col>
                                                <Col xs={12} className="mb-3">
                                                    <img alt="" src={handleSvg(weather.weather[0].main)}></img>
                                                </Col>
                                                <Col xs={12}>
                                                    <p className="fs-6 mb-0">Temp {kToC(weather.main.temp)}<sup>°C</sup></p>
                                                </Col>
                                                <Col xs={12}>
                                                    <p className="fs-6 mb-0">Humidity: {weather.main.humidity}%</p>
                                                </Col>
                                                <Col xs={12}>
                                                    <p className="fs-6 mb-0">Feels like: {kToC(weather.main.feels_like)}<sup>°C</sup></p>
                                                </Col>
                                                <Col xs={12}>
                                                    <p className="fs-6 mb-0">Wind speed {weather.wind.speed}<sup>km/h</sup></p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='danger' onClick={()=>navigate('/')}>Homepage</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }

        </>
    )
}

export default WeeklyMeteo