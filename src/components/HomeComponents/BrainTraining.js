import React, { useRef, useState } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import cs from 'classnames';
import BrainTrainingItem from './BrainTrainingItem';
import { BRAIN_TRAINING_ITEMS } from '../../constants';
import Map from './Map';

// TODO Translation
const BrainTraining = () => {
  const [completed, setCompleted] = useState(0);
  const [mapCenter, setMapCenter] = useState(null);
  const [mapTitle, setMapTitle] = useState('');
  const [mapOpened, setMapOpened] = useState(false);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(-1);
  const [mapPopupImage, setMapPopupImage] = useState(null);
  const ref = useRef(null);

  const handleCalculateScrollProgress = () => {
    if (ref && ref.current) {
      setCompleted(
        (ref.current.scrollTop / (ref.current.scrollHeight - ref.current.clientHeight)) * 100,
      );
    }
  };

  const handleSetActiveMarkerIndex = (index) => setActiveMarkerIndex(index);

  return (
    <div
      className="d-flex justify-content-center w-100"
      id="education"
    >
      <Map
        center={mapCenter}
        isOpen={mapOpened}
        handleClose={() => setMapOpened(false)}
        title={mapTitle}
        activeMarkerIndex={activeMarkerIndex}
        handleSetActiveMarkerIndex={handleSetActiveMarkerIndex}
        popupImage={mapPopupImage}
      />
      <div className="education-container d-flex">
        <span className="text-center education-timeline-text w-100">
          <span className="text-center w-100">
            BRAIN TRAINING
          </span>
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
              {BRAIN_TRAINING_ITEMS
                .map(({
                  image,
                  title,
                  startDate,
                  endDate,
                  educationalInstitution,
                  website,
                  type,
                  locationCoordinates,
                }, index) => (
                  <div
                    key={index}
                    className={cs({
                      'mt-5': !index,
                    })}
                  >
                    <BrainTrainingItem
                      image={image}
                      title={title}
                      startDate={startDate}
                      endDate={endDate}
                      educationalInstitution={educationalInstitution}
                      website={website}
                      type={type}
                      handleMapIconClick={() => {
                        setMapOpened(true);
                        setMapCenter(locationCoordinates);
                        setMapTitle(educationalInstitution);
                        setActiveMarkerIndex(index);
                        setMapPopupImage(image);
                      }}
                      locationCoordinates={locationCoordinates}
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

export default BrainTraining;
