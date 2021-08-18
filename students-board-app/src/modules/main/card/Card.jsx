import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PathCoursePage } from '../../routePath';

import {
  CardWrapper,
  ItemWrapper,
  ItemDirection,
  Line,
  ButtonWrapper,
  ArrowImage,
} from './styledComponent/Card';

const Card = ({ id, title, course, mentorName, button, rating, direction }) => {
  return (
    <CardWrapper key={id}>
      <div className={'itemCardWrapper'}>
        <ItemWrapper>
          <h2>{title}</h2>
          <div className={'itemRating'}>{rating}</div>
        </ItemWrapper>
        <p>{course}</p>
        <ItemWrapper>
          <ItemDirection>
            {direction.map(curse => {
              return (
                <div className={'itemDirectionName'} key={curse}>
                  {curse}
                </div>
              );
            })}
          </ItemDirection>
          <div>
            Mentor:
            <p className={'mentorName'}>{mentorName}</p>
          </div>
        </ItemWrapper>
      </div>
      <Line />
      <ButtonWrapper>
        <span>Next:</span>
        <Link to={`${PathCoursePage}:${id}`}>
          {button}
          <ArrowImage />
        </Link>
      </ButtonWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  mentorName: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  direction: PropTypes.array.isRequired,
};

export default Card;
