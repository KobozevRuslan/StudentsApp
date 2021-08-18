import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../store/store';

import SignIn from './SignIn';

describe('SignIn component', () => {
  it('should render SignIn component with props', () => {
    const component = shallow(
      <Provider store={store}>
        <SignIn
          title={'Welcome back'}
          link={{ linkName: 'Forgot the password', linkUrl: '/forgotPassword' }}
          buttonName={'Sign In'}
          inputTypes={{ email: '', password: '' }}
        />
      </Provider>,
    );
    console.log(component.debug());
    expect(component).toMatchSnapshot();
  });
});
