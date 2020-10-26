import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Loader from './components/Loader';
import { ROUTES } from './constants';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './i18n';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className='root-container'>
      <Container className='app-container p-0 d-flex flex-column flex-grow-1'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Router>
              <Switch>
                {ROUTES.map(({ component: Component, path }, index) => (
                  <Route key={index} exact path={path} component={Component} />
                ))}
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
