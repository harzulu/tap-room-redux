import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props) {
  let colorId, pintsId;
  let kegCost = parseInt(props.price);

  if (kegCost > 0 && kegCost <= 15) {
    colorId = "green";
  } else if (kegCost > 15 && kegCost <= 25) {
    colorId = "yellow";
  } else if (kegCost > 25 && kegCost <= 35) {
    colorId = "orange";
  } else {
    colorId = "red";
  }

  if (props.pints <= 10 && props.pints > 0) {
    pintsId = "orange";
  } else if (props.pints <= 0) {
    pintsId = "red";
  } else {
    pintsId = "green";
  }

  return (
    <>
    <div class="kegList" onClick={() => props.whenKegClicked(props.id)}>
      <h3>{props.name}</h3>
      <div class="price" id={colorId}>
        <h3>${props.price}</h3>
      </div>
      <div class="price" id={pintsId}>
        <h3>Pints left: {props.pints}</h3>
      </div>
    </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}