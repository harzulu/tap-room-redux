import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm.js';
import KegDetail from './KegDetail.js';
import EditKeg from './EditKeg.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BarController extends React.Component {

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'GET_KEG',
      selectedKeg: this.props.masterKegList[id]
    }
    dispatch(action);
  }

  handleNewKegCreation = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
    }
    dispatch(action);
    
    const action2 = {
      type: 'TOGGLE_PAGE'
    }
    dispatch(action2);
  }

  handleChangePints = () => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = this.props.currentKeg;

    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints - 1,
      id: id
    }
    dispatch(action);

    const action2 = {
      type: 'GET_KEG',
      selectedKeg: this.props.masterKegList[id]
    }
    dispatch(action2);
  }

  handleDeleteKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action)
  }

  handleKegEdit = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newKeg;
    if (this.props.editing){
      const action = {
        type: 'ADD_KEG',
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
      dispatch(action);

      const action2 = {
        type: 'GET_KEG',
        selectedKeg: this.props.masterKegList[id]
      }
      dispatch(action2);
  
      const action3 = {
        type: 'TOGGLE_EDIT'
      }
      dispatch(action3);
    } else {
      const action = {
        type: 'TOGGLE_EDIT'
      }
      dispatch(action);
    }
  }

  handleClick = () => {
    const { dispatch } = this.props;

    if (this.props.currentKeg != null) {
      const action = {
        type: 'GET_KEG',
        selectedKeg: null,
      }
      dispatch(action);
    }

    const action = {
      type: 'TOGGLE_PAGE'
    }
    dispatch(action);
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.props.isEditing) {
      currentVisibleState = <EditKeg pastKeg={this.props.currentKeg} kegEdit={this.handleKegEdit}/>
      buttonText ="Return to keg list";
    } else if (this.props.currentView) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleNewKegCreation}/>
      buttonText = "Return to keg list";
    } else if (this.props.currentKeg != null) {
      currentVisibleState = <KegDetail keg={this.props.currentKeg} changePints={this.handleChangePints} onClickingDelete={this.handleDeleteKeg} editKeg={this.handleKegEdit}/>
      buttonText = "Return to keg list";
    } else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add new keg";
    } 

    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

BarController.propTypes = {
  masterKegList: PropTypes.object,
  currentKeg: PropTypes.object,
  currentView: PropTypes.bool,
  isEditing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    currentKeg: state.currentKeg,
    currentView: state.currentView,
    isEditing: state.isEditing
  }
}

BarController = connect(mapStateToProps)(BarController);

export default BarController;