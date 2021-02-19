import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name='name' placeholder='Name of new keg:' />
        <input type="text" name='brand' placeholder='Brand:' />
        <input type="number" name='price' placeholder='Price:' />
        <input type="number" name='alcoholContent' placeholder='Alcohol Content:' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};