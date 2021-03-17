import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import { Fade } from 'react-reveal';
import { Link, scroller, animateScroll } from 'react-scroll';
import { connect } from 'react-redux';
import BasicInfo from '../components/BasicInfo';
import { LINK_PROPERTIES } from '../constants';
import { unsetScrolledToBasicInfo, unsetScrolledToTop } from '../redux/actions/homeActions';

const Home = ({
  scrolledToBasicInfo, scrolledToTop, unsetScrolledToBasicInfo, unsetScrolledToTop,
}) => {
  useEffect(() => {
    if (scrolledToTop) {
      animateScroll.scrollToTop();
      unsetScrolledToTop();
    }
    if (scrolledToBasicInfo) {
      scroller.scrollTo('basic-info', { ...LINK_PROPERTIES });
      unsetScrolledToBasicInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolledToBasicInfo, scrolledToTop]);

  return (
    <div className="home-container">
      <div className="home-intro d-flex justify-content-center align-items-center">
        <Fade bottom duration={1000} fraction={0}>
          <Row>
            <Col
              xs={{ size: 10, offset: 1 }}
              sm={{ size: 12, offset: 0 }}
              className="home-intro-title d-flex justify-content-center text-center"
            >
              LIFE IS NOW. STAY FOCUSED.
            </Col>
            <Col
              xs={{ size: 11, offset: 1 }}
              sm={{ size: 12, offset: 0 }}
              className="home-intro-subtitle d-flex justify-content-start justify-content-sm-center align-items-center pb-5"
            >
              <span className="pr-1 pr-sm-4 d-flex align-items-center home-intro-subtitle-span">ŠIŠIĆ FARIS</span>
              Software Development Engineer
            </Col>
            <Col xs={12} className="d-flex justify-content-center align-items-center">
              <Button className="read-more-button">
                <Link {...LINK_PROPERTIES} to="basic-info" spy smooth className="w-100">READ MORE</Link>
              </Button>
            </Col>
          </Row>
        </Fade>
      </div>
      <BasicInfo />
    </div>
  );
};

Home.propTypes = {
  scrolledToBasicInfo: PropTypes.bool.isRequired,
  scrolledToTop: PropTypes.bool.isRequired,
  unsetScrolledToBasicInfo: PropTypes.func.isRequired,
  unsetScrolledToTop: PropTypes.func.isRequired,
};

export default connect(({
  home,
}) => ({
  scrolledToBasicInfo: home.scrolledToBasicInfo,
  scrolledToTop: home.scrolledToTop,
}), { unsetScrolledToBasicInfo, unsetScrolledToTop })(Home);
