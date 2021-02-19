import isEditingReducer from '../../reducers/is-editing-reducer.js';

describe('isEditingReducer', () => {
  
  test('Should return default state', () => {
    expect(isEditingReducer(false, { type: null })).toEqual(false);
  });

  test('Should returned toggled state', () => {
    expect(isEditingReducer(false, { type: 'TOGGLE_EDIT' })).toEqual(false);
  });
});