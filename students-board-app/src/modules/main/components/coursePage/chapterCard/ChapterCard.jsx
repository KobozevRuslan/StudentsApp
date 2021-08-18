import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Tickets from './Tickets/Tickets';

const ChapterCard = ({ coursesPage, setExpand }) => {
  const { chapters } = coursesPage;

  useEffect(() => {
    const res = chapters.map((item, index) => {
      return { ...item, index };
    });
    setExpand(res);
  }, []);

  return (
    <div>
      {chapters.map((item, index) => {
        return (
          <div key={item.id}>
            <Tickets item={item} index={index} setExpand={setExpand} />
          </div>
        );
      })}
    </div>
  );
};

ChapterCard.propTypes = {
  coursesPage: PropTypes.object.isRequired,
  setExpand: PropTypes.func.isRequired,
};

export default ChapterCard;
