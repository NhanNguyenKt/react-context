export const setToDoInput = (payload) => ({
  type: 'change-input',
  payload,
});
export const addToList = (payload) => ({
  type: 'addToList',
  payload,
});
export const check = (payload) => ({
  type: 'check',
  payload,
});
export const remove = (payload) => ({
  type: 'remove',
  payload,
});
