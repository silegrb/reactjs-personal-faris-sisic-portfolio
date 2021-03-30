import React, { useRef, useState } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import cs from 'classnames';
import EducationItem from './EducationItem';
import { EDUCATION_ITEMS } from '../../constants';

// TODO Translation
const Education = () => {
  const [completed, setCompleted] = useState(0);
  const ref = useRef(null);

  const handleCalculateScrollProgress = () => {
    if (ref && ref.current) {
      setCompleted(
        (ref.current.scrollTop / (ref.current.scrollHeight - ref.current.clientHeight)) * 100,
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center w-100"
      id="education"
    >
      <div className="education-container d-flex">
        <span className="text-center education-timeline-text">
          <span className="text-center w-100">EDUCATION TIMELINE</span>
        </span>
        <Row className="education-scroll w-100 m-0">
          <Col
            xs={{ offset: 1, size: 10 }}
            sm={{ offset: 4, size: 4 }}
            className="d-flex align-items-center justify-content-center"
          >
            <Progress value={completed} />
          </Col>
        </Row>
        <Row className="w-100 d-flex align-items-center m-0">
          <Col xs={12} className="w-100 d-flex h-75">
            <div
              className="horizontal-scroll-wrapper"
              ref={ref}
              onScroll={handleCalculateScrollProgress}
            >
              {EDUCATION_ITEMS
                .sort((
                  { startDate: firstStartDate, primary: firstPrimary },
                  { startDate: secondStartDate, primary: secondPrimary },
                ) => {
                  if (secondPrimary && !firstPrimary) { return 1; }
                  return secondStartDate.getFullYear() - firstStartDate.getFullYear();
                })
                .map(({
                  image, title, startDate, endDate, educationalInstitution, website,
                }, index) => (
                  <div
                    key={index}
                    className={cs({
                      'mt-5': !index,
                    })}
                  >
                    <EducationItem
                      image={image}
                      title={title}
                      startDate={startDate}
                      endDate={endDate}
                      educationalInstitution={educationalInstitution}
                      website={website}
                    />
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Education;
