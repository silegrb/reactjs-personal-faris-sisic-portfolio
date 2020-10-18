import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  FacebookFilled, YoutubeFilled, LinkedinFilled, GithubFilled, InstagramFilled,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { PORTFOLIO, SCREEN_SIZES } from '../constants';
import packageJson from '../../package.json';
import { redirect } from '../utils/redirect';

const Footer = () => {
  const screenWidth = useWindowWidth();
  const { content } = PORTFOLIO.BASIC_INFORMATION;

  return (
    <Container className="card-shadow footer">
      <Row className="w-100 h-100 py-2 m-0">
        {screenWidth > SCREEN_SIZES.MD
        && (
        <Col xs={4} className="d-flex justify-content-start pl-5 align-items-center items-subtitle font-weight-light">
          &copy; 2020
          {` ${content.name} ${content.surname} `}
          &thinsp;
          {`(Version ${packageJson.version})`}
        </Col>
        )}
        <Col xs={12} lg={8} className="d-flex justify-content-lg-end justify-content-center align-items-center pl-lg-5">
          <FacebookFilled onClick={() => redirect(content.facebookLink)} className={`${screenWidth > SCREEN_SIZES.MD ? 'footer-icon-lg' : 'footer-icon'} cursor-pointer`} />
          <LinkedinFilled onClick={() => redirect(content.linkedInLink)} className={`${screenWidth > SCREEN_SIZES.MD ? 'footer-icon-lg' : 'footer-icon'} cursor-pointer pl-lg-4 pl-2`} />
          <InstagramFilled onClick={() => redirect(content.instagramLink)} className={`${screenWidth > SCREEN_SIZES.MD ? 'footer-icon-lg' : 'footer-icon'} cursor-pointer pl-lg-4 pl-2`} />
          <YoutubeFilled onClick={() => redirect(content.youtubeLink)} className={`${screenWidth > SCREEN_SIZES.MD ? 'footer-icon-lg' : 'footer-icon'} cursor-pointer pl-lg-4 pl-2`} />
          <GithubFilled onClick={() => redirect(content.githubLink)} className={`${screenWidth > SCREEN_SIZES.MD ? 'footer-icon-lg' : 'footer-icon'} cursor-pointer pl-lg-4 pl-2`} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
