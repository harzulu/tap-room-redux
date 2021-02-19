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

});