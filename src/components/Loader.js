import React from 'react';
import {
  Container,
} from 'reactstrap';
import Spinner from 'react-loader-spinner';

const Loader = () => (
  <Container className="d-flex flex-grow-1 align-items-center justify-content-center">
    <Spinner type="Oval" color="#ff6b1f" height={80} width={80} />
  </Container>
);

export default Loader;
