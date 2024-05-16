import React from "react";
import "./card.css";
import { Icon } from '@iconify/react';

const Card = (props) => {

  return(
    <div className="card-box mb-2">
      <div className="header-card">
        <h4><a href="">{props.data.name}</a></h4>
      </div>
      <p>{props.data.price}</p>
      <div className="list-container">
        <ul>
          {
            props.data.list.map((item, index)=>(
              <li key={`${item}-${index}`}>
                <p><Icon color="#47b2e4" icon="bx-check" /> {item}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Card;