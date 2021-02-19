import rootReducer from '../../reducers/index';

describe('rootReducer', () => {

  test('Should return default state', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      currentKeg: {},
      currentView: false,
      isEditing: false,
      masterKegList: {}
    });
  });
});