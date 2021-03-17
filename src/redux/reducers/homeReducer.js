import initialState from '../initialState';
import * as types from '../constants';

export default function reducer(state = initialState.home, action) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;
  switch (type) {
    case types.SET_SCROLLED_TO_BASIC_INFO_SUCCESS:
      return {
        ...state,
        scrolledToBasicInfo: true,
      };
    case types.UNSET_SCROLLED_TO_BASIC_INFO_SUCCESS:
      return {
        ...state,
        scrolledToBasicInfo: false,
      };
    case types.SET_SCROLLED_TO_TOP_SUCCESS:
      return {
        ...state,
        scrolledToTop: true,
      };
    case types.UNSET_SCROLLED_TO_TOP_SUCCESS:
      return {
        ...state,
        scrolledToTop: false,
      };
    default:
      return state;
  }
}
