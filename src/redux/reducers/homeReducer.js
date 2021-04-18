import initialState from '../initialState';
import * as types from '../constants';

export default function reducer(state = initialState.home, action) {
  // eslint-disable-next-line no-unused-vars
  const { type } = action;
  switch (type) {
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
    case types.SET_SCROLLED_TO_EDUCATION_SUCCESS:
      return {
        ...state,
        scrolledToEducation: true,
      };
    case types.UNSET_SCROLLED_TO_EDUCATION_SUCCESS:
      return {
        ...state,
        scrolledToEducation: false,
      };
    case types.SET_SCROLLED_TO_SKILL_SET_SUCCESS:
      return {
        ...state,
        scrolledToSkillSet: true,
      };
    case types.UNSET_SCROLLED_TO_SKILL_SET_SUCCESS:
      return {
        ...state,
        scrolledToSkillSet: false,
      };
    default:
      return state;
  }
}
