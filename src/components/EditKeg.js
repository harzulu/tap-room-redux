import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm.js';

export default function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.kegEdit({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: props.pastKeg.pints, id: props.pastKeg.id});
  }

  return (
    <>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Update keg"/>

    </>
  );

}

NewKegForm.propTypes = {
  pastKeg: PropTypes.object,
  kegEdit: PropTypes.func
}