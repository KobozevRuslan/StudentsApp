import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PathMain, PathSignIn, PathCoursePage } from './routePath';
import { selectorIsAuthorised, selectorPageInfo } from './selector';

import Header from './components/header/Header';
import Main from './main/Main';
import CoursePage from './main/components/coursePage/CoursePage';
import SignIn from './auth/signIn/SignIn';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import GlobalStyle from '../styleComponents/GlobalStyle';

const App = () => {
  const {
    pageInfo: [signInInfo],
    isAuthorised,
  } = useSelector(
    createStructuredSelector({
      isAuthorised: selectorIsAuthorised,
      pageInfo: selectorPageInfo,
    }),
    shallowEqual,
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <ErrorBoundary>
            {!isAuthorised ? <Redirect to={PathSignIn} /> : <Redirect to={PathMain} />}
            <Route exact path={PathMain} component={Main} />
            <Route path={`${PathCoursePage}:id`} component={CoursePage} />
            <Route path={PathSignIn} component={() => <SignIn {...signInInfo} />} />
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
