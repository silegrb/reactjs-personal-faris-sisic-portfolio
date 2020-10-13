import React from 'react';
import {
  Container,
} from 'reactstrap';
import Spinner from 'react-loader-spinner';

const Loader = () => (
  <Container className="d-flex justify-content-center">
    <Spinner type="Oval" color="#00BFFF" height={80} width={80} />
  </Container>
);

export default Loader;
