import React from "react";
import DeluxeDouble from "../../assets/images/DeluxeDouble.jpg";
import SuperiorDouble from "../../assets/images/SuperiorDouble.jpg";
import SuperiorSuite from "../../assets/images/SuperiorSuite.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './roomCards.css'
import {Row, Container, Col, Stack, Button} from 'react-bootstrap'


const RoomCards = (props) => {
    const roomDummyData = [
        {
            id: 0,
            name: "Deluxe Double",
            bed: "Queen Bed",
            view: "Standard",
            price: "$112.00",
            img: DeluxeDouble     
        },
        {
            id: 1,
            name: "Superior Double",
            bed: "King Bed",
            view: "Balcony",
            price: "$180.00", 
            img: SuperiorDouble    
        },
        {
            id: 2,
            name: "Superior Suite",
            bed: "2 Queen Beds",
            view: "Overview of the City",
            price: "$230.00",
            img: SuperiorSuite     
        }
    ] 

    let cards = [];
    const renderCards = () => {
    const openRooms = roomDummyData.find(rooms => rooms.name === props.roomType)
    for (let i = 0; i < props.roomNumber[0]; i++){
        cards.push( <Stack key={i} gap={1} className="col-md-5">
        <Container>
            <Row key={openRooms.id}>
                <Row md="auto">
                    <Row className="card">
                        <img className="card-img-top" src={openRooms.img} alt="Superior Double hotel room" />
                        <div className="card-body">
                        <h5 className="card-title">{openRooms.name} Room</h5>
                        <ul>
                            <li>Room Description:</li>
                            <li>Bed Type: {openRooms.bed}</li>
                            <li>Room View: {openRooms.view}</li>
                            <li>Room Price:{openRooms.price}.</li>
                        </ul>
                        </div>
                        <Button id="roomBtn" size="lg" variant="outline-warning">Select Room</Button>{' '}
                    </Row>
                </Row>
            </Row>
        </Container>
        </Stack>)
    }
}
if(props.isValid === true ) {renderCards()} 

    return (
        <div>
           {cards}
        </div>
            
    );

}

export default RoomCards;