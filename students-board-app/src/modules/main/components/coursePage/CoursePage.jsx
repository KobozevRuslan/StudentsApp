import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { selectorGetCourses } from './selector';

import CourseHeader from './courseHeader/CourseHeader';
import ActiveStep from './activeStep/ActiveStep';
import ChapterCard from './chapterCard/ChapterCard';

import { CoursePageWrapper } from './styledComponent/CoursePage';

const CoursePage = () => {
  const coursesPage = useSelector(selectorGetCourses, shallowEqual);
  const [expand, setExpand] = useState([]);

  return (
    <>
      {coursesPage.map(item => {
        return (
          <div key={item.name}>
            <CourseHeader coursesPage={item} />
            <CoursePageWrapper>
              <ActiveStep coursesPage={item} expand={expand} />
              <ChapterCard coursesPage={item} setExpand={setExpand} />
            </CoursePageWrapper>
          </div>
        );
      })}
    </>
  );
};

export default CoursePage;
