// Actions
export const FETCH_TYPE = 'prefix/FETCH_TYPE';
export const LOADING_TYPE = 'prefix/LOADING_TYPE';
export const SUCCESS_TYPE = 'prefix/SUCCESS_TYPE';
export const ERROR_TYPE = 'prefix/ERROR_TYPE';

// Initial State
export const initialState = {
  data: [],
  loading: false,
  error: '',
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (type) {
    case LOADING_TYPE:
      return { ...state, loading: action.payload };
    case SUCCESS_TYPE:
      return { ...state, data: action.payload };
    case ERROR_TYPE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

// Action creators
export const loadingAction = () => ({ type: LOADING_TYPE, payload: true });
export const successAction = data => ({ type: SUCCESS_TYPE, payload: data });
export const errorAction = error => ({ type: ERROR_TYPE, payload: error });