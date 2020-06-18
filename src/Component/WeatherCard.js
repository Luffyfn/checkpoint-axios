import React from 'react'
import {Card} from 'react-bootstrap';

function WeatherCard({weatherTown}) {
    const data = {
        ...weatherTown,
        main:{
            ...weatherTown.main
        },
        sys:{
            ...weatherTown.sys
        },
        wind:{
            ...weatherTown.wind
        }
    };
    return (
        <div>
            <Card bg="info" text="light" style={{ width: '18rem' }}>
                <Card.Header style={{fontWeight: "bolder", color: "yellow", textAlign: "center"}}>{weatherTown.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                       temp: {data.main.temp} °F <br/>
                       temp-min: {data.main.temp_min} °F <br/>
                       temp-max: {data.main.temp_max} °F <br/>
                       country: {data.sys.country} <br/>
                       weather: {data.wind.speed} m/s
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WeatherCard;
