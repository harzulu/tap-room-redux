import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg.js'

export default function KegList(props) {
  return (
    <>
      <h2>What's on tap?</h2>
      <hr />
      {props.kegList.map((keg) => 
        <Keg
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={keg.id}
          id={keg.id}/>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}