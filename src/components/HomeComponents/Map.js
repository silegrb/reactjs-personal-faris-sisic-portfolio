import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, Row, Col,
} from 'reactstrap';
import {
  MapContainer, TileLayer, Marker, useMap, Popup, useMapEvent,
} from 'react-leaflet';
import L from 'leaflet';
import { X } from 'react-feather';
import cs from 'classnames';
import { logoRounded } from '../../assets/img';
import { BRAIN_TRAINING_ITEMS } from '../../constants';
import { compareDouble } from '../../utils/calculations';

const markerIcon = new L.Icon({
  iconRetinaUrl: logoRounded,
  iconUrl: logoRounded,
  iconSize: [40, 40],
  popupAnchor: [0, 80],
});

const activeMarkerIcon = new L.Icon({
  iconRetinaUrl: logoRounded,
  iconUrl: logoRounded,
  iconSize: [40, 40],
  className: 'active-marker',
});

const Map = ({
  isOpen, handleClose, center, title, activeMarkerIndex, handleSetActiveMarkerIndex,
}) => {
  const [mapCenter, setMapCenter] = useState(null);
  const [w, setW] = useState('100%');

  useEffect(() => {
    setMapCenter(center);
  }, [center]);

  const MarkerHandler = () => {
    const map = useMap();
    map.invalidateSize();
    if (activeMarkerIndex && (map.getZoom() !== 18
        || !(compareDouble(map.getCenter().lat, mapCenter[0])
            && compareDouble(map.getCenter().lng, mapCenter[1])))) {
      map.flyTo(mapCenter, 18, {
        animate: true,
        duration: 0.7,
      });
    }
    return null;
  };

  const MapHandler = () => {
    useMapEvent('click', () => {
      handleSetActiveMarkerIndex(null);
    });
    return null;
  };

  return (
    <Modal
      className="modal-dialog-scrollable"
      contentClassName="modal-height"
      size="xl"
      centered
      isOpen={isOpen}
    >
      <ModalBody className="p-0 position-relative">
        <div
          className="map-x"
          onClick={handleClose}
        >
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <X size={50} />
          </div>
        </div>
        <div className={cs('map-cover-title d-flex justify-content-center align-items-center', {
          'map-cover-title-animation': isOpen,
        })}
        >
          {title}
        </div>
        <MapContainer
          tap={false}
          minZoom={3}
          className={cs({
          })}
          center={mapCenter}
          zoom={18}
        >
          <MapHandler />
          <MarkerHandler />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {BRAIN_TRAINING_ITEMS.filter(({ locationCoordinates }) => !!locationCoordinates).map(
            ({ locationCoordinates, educationalInstitution, image }, index) => (
              <Marker
                key={index}
                icon={index === activeMarkerIndex ? activeMarkerIcon : markerIcon}
                position={locationCoordinates}
                eventHandlers={{
                  click: () => {
                    setMapCenter(locationCoordinates);
                    handleSetActiveMarkerIndex(index);
                    setW(w === '100%' ? '75%' : '100%');
                  },
                }}
              >
                <Popup>
                  <Row className="w-100 m-0 p-0">
                    <Col xs={12} className="d-flex justify-content-center p-0 m-0 w-100">
                      <img alt={title} src={image} style={{ width: '250px', height: '140px' }} />
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center py-2 text-white" style={{ fontSize: '14px' }}>
                      {educationalInstitution}
                    </Col>
                  </Row>
                </Popup>
              </Marker>
            ),
          )}
        </MapContainer>
      </ModalBody>
    </Modal>
  );
};

Map.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  center: PropTypes.array,
  title: PropTypes.string,
  activeMarkerIndex: PropTypes.number,
  handleSetActiveMarkerIndex: PropTypes.func.isRequired,
};

export default Map;
