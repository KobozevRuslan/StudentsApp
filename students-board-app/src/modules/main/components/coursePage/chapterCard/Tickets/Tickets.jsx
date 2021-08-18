import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Comments from './coments/Coments';

import {
  BtnArrow,
  BtnWrapper,
  ChapterCardBlock,
  ChapterCardBlockWrapper,
  ChapterCardWrapper,
  CommentsWrapper,
  Line,
  CommentsMainItemWrapper,
} from './styledComponent/Tickets';

const Tickets = ({ item, index, setExpand }) => {
  const [active, setActive] = useState(false);

  const isOpenComments = () => {
    setActive(!active);
    setExpand(prev => {
      const newState = prev.map(elem => {
        return elem.index === index ? { ...elem, isExpand: !elem.isExpand } : elem;
      });
      return newState;
    });
  };

  return (
    <ChapterCardWrapper>
      <ChapterCardBlock>
        <ChapterCardBlockWrapper>
          <div className={'itemData'}>
            <h2>{item.name}</h2>
            <div className={'wrapperDeadLine'}>
              <span className={'itemSpan'}>Deadline: </span>
              <span>{item.deadline}</span>
              <div className={'ratingCircle'}>{item.rating}</div>
            </div>
          </div>
          <div>
            <span>Chapter {item.id}: </span>
            {item.status}
          </div>
        </ChapterCardBlockWrapper>
        <CommentsWrapper show={active}>
          <p className={'paragraphItem'}>Small chapter description</p>
          <CommentsMainItemWrapper>
            <Line />
            {item.comments.map(comment => {
              return (
                <div key={comment.initiator_id}>
                  <Comments comment={comment} />
                </div>
              );
            })}
            <Line className={'lastLine'} />
          </CommentsMainItemWrapper>
        </CommentsWrapper>
        <BtnWrapper show={active}>
          <BtnArrow onClick={isOpenComments} show={active} />
        </BtnWrapper>
      </ChapterCardBlock>
    </ChapterCardWrapper>
  );
};

Tickets.propTypes = {
  item: PropTypes.object.isRequired,
  setExpand: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tickets;
