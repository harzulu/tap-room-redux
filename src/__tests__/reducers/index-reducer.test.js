import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import currentKegReducer from '../../reducers/current-keg-reducer';
import currentViewReducer from '../../reducers/current-view-reducer';
import isEditingReducer from '../../reducers/is-editing-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      currentKeg: {},
      currentView: false,
      isEditing: false,
      masterKegList: {}
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual({}, { type: null });
  });

  test('Check that initial state of currentKegReducer matches root reducer', () => {
    expect(store.getState().currentKeg).toEqual({}, { type: null });
  });

  test('Check that initial state of isEditingReducer matches root reducer', () => {
    expect(store.getState().isEditing).toEqual(false, { type: null });
  });

  test('Check that initial state of currentViewReducer matches root reducer', () => {
    expect(store.getState().currentView).toEqual(false, { type: null });
  });

  test('Check that ADD_KEG works for kegListReducer and rootReducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: "Miller Lite",
      brand: "MillerCoors",
      price: 94,
      alcoholContent: 5,
      pints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer({}, action));
  });

  test('Check that TOGGLE_EDIT works for both isEditingReducer and rootReducer', () => {
    const action = {
      type: 'TOGGLE_EDIT'
    }
    store.dispatch(action);
    expect(store.getState().isEditing).toEqual(isEditingReducer(false, action));
  });

  test('Check that TOGGLE_PAGE works for both currentViewReducer and rootReducer', () => {
    const action = {
      type: 'TOGGLE_PAGE'
    }
    store.dispatch(action);
    expect(store.getState().currentView).toEqual(currentViewReducer(false, action));
  });

  test('Check that GET_KEG works for both currentKegReducer and rootReducer', () => {
    const action = {
      type: 'GET_KEG',
      id: store.getState.masterKegList[1],
    }
    store.dispatch(action);
    expect(store.getState().currentKeg).toEqual(currentKegReducer({}, action));
  });

});