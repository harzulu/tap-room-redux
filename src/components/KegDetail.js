import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props) {
  const { keg, changePints, onClickingDelete, editKeg } = props;
  let pintAmmount, pintButton, note;
  
  if (keg.pints < 11 && keg.pints > 0) {
    note = <h4>Low stock!</h4>
  }
  if (keg.pints < 1) {
    pintAmmount = "Out of stock"
  } else {
    pintAmmount = keg.pints;
    pintButton = <button onClick={() => changePints()}>Take a pint!</button>;
  }
  return (
    <>
      <h1>Keg Details:</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>${keg.price}</h3>
      <h3>{keg.alcoholContent}%</h3>
      <h3>Pints left: {pintAmmount}</h3>
      {note}
      {pintButton}
      <button onClick={ () => onClickingDelete(keg.id) }>Remove Keg</button>
      <button onClick={ () => editKeg(keg)}>Edit this keg</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  changePints: PropTypes.func,
  onClickingDelete: PropTypes.func,
  editKeg: PropTypes.func
}