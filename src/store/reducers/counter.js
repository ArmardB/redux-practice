import * as actionTypes from '../actions';

const initialState = {
  counter: 0
  
}

const one = 1;

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT: 
      return {
        ...state,
        counter: state.counter + one
      };
    case actionTypes.DECREMENT: 
      return {
        ...state,
        counter: state.counter - one
      }
    case actionTypes.ADD: 
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default: 
    return state;
  }

}

export default counterReducer;