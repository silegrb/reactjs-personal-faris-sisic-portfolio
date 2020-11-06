import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, onClick }) => show && <div className="backdrop" onClick={onClick} />;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
