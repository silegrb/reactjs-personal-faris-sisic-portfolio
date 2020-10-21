import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Loader from './components/Loader';
import { ROUTES } from './constants';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback={() => <Loader />}>
      <div className='root-container'>
        <Container className='app-container p-0 d-flex flex-column flex-grow-1'>
          <Navbar />
          <Router>
            <Switch>
              {ROUTES.map(({ component: Component, path }) => (
                <Route exact path={path} component={Component} />
              ))}
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Container>
      </div>
    </Suspense>
  );
}

export default App;
