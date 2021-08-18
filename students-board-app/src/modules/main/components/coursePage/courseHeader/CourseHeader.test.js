import React from 'react';
import { Provider } from 'react-redux';

import CourseHeader from './CourseHeader';
import { store } from '../../../../../store/store';

describe('CourseHeader component', () => {
  const props = [
    {
      name: 'Front-end trainee course',
      rating: '4.6',
      technologies: ['Java Script', 'React', 'MobX-state-tree', 'CSS'],
      mentorName: 'Semeon Zaltz',
    },
  ];

  it('should render CourseHeader component with props', () => {
    const component = shallow(
      <Provider store={store}>
        <CourseHeader coursesPage={{ ...props }} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
