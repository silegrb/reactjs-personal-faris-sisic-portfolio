import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import cs from 'classnames';
import ReactPlayer from 'react-player';
import { useWindowWidth } from '@react-hook/window-size';
import { Provider } from 'react-redux';
import Loader from './components/Loader';
import {
  EVENT_LISTENERS,
  LOADING_WAIT_TIME,
  ROUTES,
  SCREEN_SIZES,
} from './constants';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './i18n';
import Sidebar from './components/Sidebar';
import configureStore from './redux/configureStore';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const screenWidth = useWindowWidth();

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_WAIT_TIME);
  }, []);

  window.addEventListener(EVENT_LISTENERS.SCROLL, () => {
    setOpacity(1 - window.pageYOffset / (window.innerHeight * 0.65));
  });

  return (
    <Provider store={configureStore()}>
      <div className='root-container'>
        <Container className='app-container p-0 m-0 d-flex flex-column flex-grow-1'>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div
                className={cs('component-container', {
                  'width-100': screenWidth < SCREEN_SIZES.SM || !sidebarOpen,
                  'width-75': screenWidth >= SCREEN_SIZES.SM && sidebarOpen,
                })}
              >
                <Row>
                  <Col>
                    <Router>
                      <Sidebar
                        isOpen={sidebarOpen}
                        handleSidebar={handleSidebar}
                      />
                      <Switch>
                        {ROUTES.map(({ component: Component, path }, index) => (
                          <Route
                            key={index}
                            exact
                            path={path}
                            component={Component}
                          />
                        ))}
                        <Route>
                          <PageNotFound />
                        </Route>
                      </Switch>
                      <Footer sidebarOpen={sidebarOpen} />
                    </Router>
                  </Col>
                </Row>
              </div>
              <div
                className={cs('position-fixed', {
                  'width-100': screenWidth < SCREEN_SIZES.SM || !sidebarOpen,
                  'width-75': screenWidth >= SCREEN_SIZES.SM && sidebarOpen,
                })}
              >
                <ReactPlayer
                  playsinline
                  playing
                  className='background-video'
                  style={{ opacity }}
                  url='video/snowboarding_no_border.mp4'
                  loop
                  muted
                />
              </div>
              <Navbar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
            </>
          )}
        </Container>
      </div>
    </Provider>
  );
};

export default App;
