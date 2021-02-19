import rootReducer from '../../reducers/index';

describe('rootReducer', () => {

  test('Should return default state', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      currentKeg: {},
      currentView: true,
      isEditing: false,
      masterKegList: {}
    });
  });
});