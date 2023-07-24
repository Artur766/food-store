const defaultState = {
  meal: []
}

export const mealReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, meal: [...state.meal, action.payload] }
    case "GET_CASH":
      return { ...state, meal: state.cash - action.payload }
    default:
      return state
  }
}