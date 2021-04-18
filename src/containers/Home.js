import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import { Fade } from 'react-reveal';
import { Link, scroller, animateScroll } from 'react-scroll';
import { connect } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import BasicInfo from '../components/HomeComponents/BasicInfo';
import { LINK_PROPERTIES, SCREEN_SIZES } from '../constants';
import {
  unsetScrolledToTop,
  unsetScrolledToBasicInfo,
  unsetScrolledToEducation,
  unsetScrolledToSkillSet,
} from '../redux/actions/homeActions';
import BrainTraining from '../components/HomeComponents/BrainTraining';
import SkillSet from '../components/HomeComponents/SkillSet';

const Home = ({
  scrolledToTop,
  scrolledToBasicInfo,
  scrolledToEducation,
  scrolledToSkillSet,
  unsetScrolledToBasicInfo,
  unsetScrolledToTop,
  unsetScrolledToEducation,
  unsetScrolledToSkillSet,
}) => {
  const screenWidth = useWindowWidth();

  useEffect(() => {
    if (scrolledToTop) {
      animateScroll.scrollToTop();
      unsetScrolledToTop();
    }
    if (scrolledToBasicInfo) {
      scroller.scrollTo('basic-info', { ...LINK_PROPERTIES });
      unsetScrolledToBasicInfo();
    }
    if (scrolledToEducation) {
      scroller.scrollTo('education', { ...LINK_PROPERTIES });
      unsetScrolledToEducation();
    }
    if (scrolledToSkillSet) {
      scroller.scrollTo('skill-set', { ...LINK_PROPERTIES });
      unsetScrolledToSkillSet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolledToTop, scrolledToBasicInfo, scrolledToEducation]);

  return (
    <div>
      <div className="home-intro d-flex justify-content-center align-items-center">
        <Fade bottom duration={1000} fraction={0}>
          <Row className="w-100 m-0 p-0">
            <Col
              xs={{ size: 10, offset: 1 }}
              sm={{ size: 12, offset: 0 }}
              className="home-intro-title d-flex justify-content-center text-center"
            >
              LIFE IS NOW.
              {screenWidth <= SCREEN_SIZES.SM && <br />}
              {' '}
              STAY FOCUSED.
            </Col>
            <Col
              xs={{ size: 10, offset: 1 }}
              sm={{ size: 12, offset: 0 }}
              className="home-intro-subtitle d-flex justify-content-center align-items-center pb-5"
            >
              <span className="pr-1 pr-sm-3 font-weight-bold d-flex align-items-center">ŠIŠIĆ FARIS</span>
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
      <BrainTraining />
      <SkillSet />
    </div>
  );
};

Home.propTypes = {
  scrolledToBasicInfo: PropTypes.bool.isRequired,
  scrolledToTop: PropTypes.bool.isRequired,
  scrolledToEducation: PropTypes.bool.isRequired,
  scrolledToSkillSet: PropTypes.bool.isRequired,
  unsetScrolledToBasicInfo: PropTypes.func.isRequired,
  unsetScrolledToTop: PropTypes.func.isRequired,
  unsetScrolledToEducation: PropTypes.func.isRequired,
  unsetScrolledToSkillSet: PropTypes.func.isRequired,
};

export default connect(({
  home,
}) => ({
  scrolledToTop: home.scrolledToTop,
  scrolledToBasicInfo: home.scrolledToBasicInfo,
  scrolledToEducation: home.scrolledToEducation,
  scrolledToSkillSet: home.scrolledToSkillSet,
}), {
  unsetScrolledToBasicInfo,
  unsetScrolledToTop,
  unsetScrolledToEducation,
  unsetScrolledToSkillSet,
})(Home);
