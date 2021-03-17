import * as types from '../constants';

const setScrolledToBasicInfoSuccess = () => ({
  type: types.SET_SCROLLED_TO_BASIC_INFO_SUCCESS,
});

const unsetScrolledToBasicInfoSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_BASIC_INFO_SUCCESS,
});

const setScrolledToTopSuccess = () => ({
  type: types.SET_SCROLLED_TO_TOP_SUCCESS,
});

const unsetScrolledToTopSuccess = () => ({
  type: types.UNSET_SCROLLED_TO_TOP_SUCCESS,
});

export const setScrolledToBasicInfo = () => (dispatch) => {
  dispatch(setScrolledToBasicInfoSuccess());
};

export const unsetScrolledToBasicInfo = () => (dispatch) => {
  dispatch(unsetScrolledToBasicInfoSuccess());
};

export const setScrolledToTop = () => (dispatch) => {
  dispatch(setScrolledToTopSuccess());
};

export const unsetScrolledToTop = () => (dispatch) => {
  dispatch(unsetScrolledToTopSuccess());
};
