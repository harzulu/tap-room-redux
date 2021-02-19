import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm.js';
import KegDetail from './KegDetail.js';
import EditKeg from './EditKeg.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BarController extends React.Component {

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({currentKeg: selectedKeg})
  }

  handleNewKegCreation = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newKeg;
    const action = {
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
    }
    dispatch(action);
    this.setState({currentViewPage: false});
  }

  handleChangePints = () => {
    const selectedKeg = this.props.currentKeg;
    const newQuantity = Object.assign({}, selectedKeg, { pints: parseInt(selectedKeg.pints) - 1 });

    const newKegList = this.props.masterKegList
      .filter(keg => keg.id !== this.props.currentKeg.id)
      .concat(newQuantity);
    this.setState({
      masterKegList: newKegList,
      currentKeg: newQuantity
    });
  }

  handleDeleteKeg = (id) => {
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action)
  }

  handleKegEdit = (newKeg) => {
    if (this.props.editing){
      let newMasterKegList = this.props.masterKegList.filter(keg => keg.id !== newKeg.id);
      newMasterKegList.concat(newKeg);
      this.setState({
        masterKegList: newMasterKegList,
        currentKeg: newKeg,
        editing: false
      })
    } else {
      this.setState({editing: true});
    }
  }

  handleClick = () => {
    if (this.props.currentKeg != null) {
      this.setState({
        currentViewPage: false,
        currentKeg: null
      });
    } else {
      this.setState(prevState => ({currentViewPage: !prevState.currentViewPage}));
    }
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentVisibleState = <EditKeg pastKeg={this.props.currentKeg} kegEdit={this.handleKegEdit}/>
      buttonText ="Return to keg list";
    } else if (this.props.currentViewPage) {
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
  masterKegList: PropTypes.Object,
  currentKeg: PropTypes.Object,
  currentViewPage: PropTypes.bool,
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