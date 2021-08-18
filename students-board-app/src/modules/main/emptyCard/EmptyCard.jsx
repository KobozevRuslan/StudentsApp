import React from 'react';

import { EmptyCardWrapper } from './styledComponent/EmptyCard';

const EmptyCard = () => {
  return (
    <div>
      <EmptyCardWrapper>
        <div className={'itemEmptyCard'}>
          <p>Card is empty, the required course was not found</p>
        </div>
      </EmptyCardWrapper>
    </div>
  );
};

export default EmptyCard;
