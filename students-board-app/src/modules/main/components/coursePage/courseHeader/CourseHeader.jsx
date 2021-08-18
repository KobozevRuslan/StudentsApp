import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PathMain } from '../../../../routePath';

import leftArrow from '@assets/image/LeftArrow.png';

import { BlockWrapper, HeaderMainWrapper, ItemDirection } from './styledComponent/CourseHeader';

const CourseHeader = ({ coursesPage }) => {
  const { name, rating, mentorName, technologies } = coursesPage;

  return (
    <HeaderMainWrapper>
      <div className={'headerWrapper'}>
        <BlockWrapper>
          <div className={'headerWrapperItem'}>
            <Link to={PathMain}>
              <img src={leftArrow} />
            </Link>
            <h2>{name}</h2>
            <div className={'itemRatingCircle'}>{rating}</div>
          </div>
          <div>
            <p>Short course description</p>
          </div>
        </BlockWrapper>
        <BlockWrapper>
          <ItemDirection>
            {technologies.map(tech => {
              return (
                <div className={'itemDirectionName'} key={tech}>
                  {tech}
                </div>
              );
            })}
          </ItemDirection>
          <div className={'itemMentor'}>
            <span>Mentor:</span>
            <p>{mentorName}</p>
          </div>
        </BlockWrapper>
      </div>
    </HeaderMainWrapper>
  );
};

CourseHeader.propTypes = {
  coursesPage: PropTypes.object.isRequired,
};

export default CourseHeader;
