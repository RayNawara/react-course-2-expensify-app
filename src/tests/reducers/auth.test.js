import authReducer from '../../reducers/auth';

test('should set uid for Login', () => {
  const uid = '123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(uid, action);
  expect(state.uid).toEqual(uid);
});

test('should clear uid Logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});