import React from 'react';
import { Container } from 'reactstrap';
import { logo } from '../assets/img';

const Loader = () => (
  <Container className="d-flex flex-grow-1 align-items-center justify-content-center">
    <img
      src={logo}
      alt=""
      className="logo-loading"
    />
  </Container>
);

export default Loader;
