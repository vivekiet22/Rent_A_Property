
import React from "react";
import { Card } from "react-bootstrap";
import { FaBed, FaBath,FaHome } from "react-icons/fa"
// HiHomeModern
const PropertyCard = ({ property }) => {
  const {name, address, city, state, price, bedrooms, bathrooms, type, image } = property;

  return (
    <div className="col-sm-4 mb-4">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {/* <Card.Title>{`$${price}/month`}</Card.Title> */}
          <Card.Title>
            <span style={{ color: "blue" }}>{`$${price}`}</span><span style={{color:"grey",fontSize:"1rem"}}>/month</span>
          </Card.Title>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div>{`${address}, ${city}, ${state}`}</div>
            <hr/>
            <div>
                <FaBed className="mr-1" />
                {bedrooms}Beds{"  "}
              
                <FaBath className="mr-1" />
                {bathrooms}Bathroom{" "}
                
            
              <FaHome className="mr-1"/> {type}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PropertyCard;