import * as types from '../constants';

const setScrolledToTopSuccess = () => ({
  type: types.SET_SCROLLED_TO_TOP_SUCCESS,
});

const unsetScrolledToTopSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_TOP_SUCCESS,
});

const setScrolledToBasicInfoSuccess = () => ({
  type: types.SET_SCROLLED_TO_BASIC_INFO_SUCCESS,
});

const unsetScrolledToBasicInfoSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_BASIC_INFO_SUCCESS,
});

const setScrolledToEducationSuccess = () => ({
  type: types.SET_SCROLLED_TO_EDUCATION_SUCCESS,
});

const unsetScrolledToEducationSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_EDUCATION_SUCCESS,
});

const setScrolledToSkillSetSuccess = () => ({
  type: types.SET_SCROLLED_TO_SKILL_SET_SUCCESS,
});

const unsetScrolledToSkillSetSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_SKILL_SET_SUCCESS,
});

export const setScrolledToTop = () => (dispatch) => {
  dispatch(setScrolledToTopSuccess());
};

export const unsetScrolledToTop = () => (dispatch) => {
  dispatch(unsetScrolledToTopSuccess());
};

export const setScrolledToBasicInfo = () => (dispatch) => {
  dispatch(setScrolledToBasicInfoSuccess());
};

export const unsetScrolledToBasicInfo = () => (dispatch) => {
  dispatch(unsetScrolledToBasicInfoSuccess());
};

export const setScrolledToEducation = () => (dispatch) => {
  dispatch(setScrolledToEducationSuccess());
};

export const unsetScrolledToEducation = () => (dispatch) => {
  dispatch(unsetScrolledToEducationSuccess());
};

export const setScrolledToSkillSet = () => (dispatch) => {
  dispatch(setScrolledToSkillSetSuccess());
};

export const unsetScrolledToSkillSet = () => (dispatch) => {
  dispatch(unsetScrolledToSkillSetSuccess());
};
