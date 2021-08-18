import React from 'react';
import PropTypes from 'prop-types';

import { CommentsItem, CommentsItemWrapper, Line } from './styledComponent/Comments';

const Comments = ({ comment }) => {
  return (
    <>
      <CommentsItemWrapper>
        <CommentsItem>
          <div>
            {comment.initiator_name}:<p>{comment.user_name}</p>
          </div>
          <div className={'commentItem'}>
            Comment:
            <p>{comment.comment}</p>
          </div>
        </CommentsItem>
        <div className={'pointsItem'}>
          Points
          <p>{comment.points}</p>
        </div>
      </CommentsItemWrapper>
      <Line />
    </>
  );
};

Comments.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comments;
