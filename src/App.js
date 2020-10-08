import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { ROUTES } from './constants';
import PageNotFound from './components/NotFound';

function App() {
  return (
    <Suspense fallback={() => <Loader />}>
      <div className='app-container-height'>
        {/* TODO Add navbar */}
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
      </div>
    </Suspense>
  );
}

export default App;
