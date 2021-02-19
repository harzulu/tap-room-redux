import isEditingReducer from '../../reducers/is-editing-reducer.js';

describe('isEditingReducer', () => {
  
  test('Should return default state', () => {
    expect(isEditingReducer(true, { type: null })).toEqual(false);
  });
});