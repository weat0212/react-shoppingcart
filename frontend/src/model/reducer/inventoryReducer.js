export const inventoryReducer = (state = null, action) => {
  switch (action.type) {
    case "increase":
      action.target.value = parseInt(action.target.value) + 1;
      return state;
    case "decrease":
      if (parseInt(action.target.value) <= 1) {
        action.target.value = 0;
      } else {
        action.target.value = parseInt(action.target.value) - 1;
      }
      return state;
    default:
      return state;
  }
};
