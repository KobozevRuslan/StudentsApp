import React from 'react';
import PropTypes from 'prop-types';

import {
  ActiveStepCircle,
  ActiveStepItem,
  ActiveStepLine,
  ActiveStepWrapper,
  Img,
} from './styledComponent/ActiveStep';

const ActiveStep = ({ coursesPage, expand }) => {
  const { chapters } = coursesPage;

  const isBetweenLineDone = (index, cards) => {
    if (index !== cards.length - 1) {
      return cards[index].status === cards[index + 1].status && cards[index].status === 'Done';
    }
    return false;
  };

  return (
    <ActiveStepWrapper>
      {chapters.map((item, index) => {
        const status = item.status === 'Done';
        const lineStatus = isBetweenLineDone(index, chapters);
        const elem = expand[index];
        return (
          <ActiveStepItem key={item.id}>
            <ActiveStepCircle status={status}>
              {status ? <Img /> : `${item.activeId}`}
            </ActiveStepCircle>
            <ActiveStepLine
              className={'lastLine'}
              isExpanded={elem && elem.isExpand}
              lineStatus={lineStatus}
            />
          </ActiveStepItem>
        );
      })}
    </ActiveStepWrapper>
  );
};

ActiveStep.propTypes = {
  coursesPage: PropTypes.object.isRequired,
  expand: PropTypes.array.isRequired,
};

export default ActiveStep;
