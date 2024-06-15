import React from "react";
import "../ConocenosComponent.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const ProfileCard = (props) => {

  const data = props.data;

  return(
    <Card>
      <div className="top-color-background"></div>
      <img src={data.image} alt={`Person profile - ${data.name} ${data.lastName}`}/>
      <CardBody>
        <CardTitle tag="h5">{`${data.name} ${data.lastName}`}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">{data.jobPosition}</CardSubtitle>
        <CardText>{data.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default ProfileCard;