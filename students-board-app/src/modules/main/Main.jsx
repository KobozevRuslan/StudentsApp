import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectorCard } from './selector';

import SearchInput from './components/searchInput/SearchInput';
import Card from './card/Card';
import EmptyCard from './emptyCard/EmptyCard';

import { WrapperItem, SearchMainWrapper } from './styledComponent/Main';

const Main = () => {
  const { card } = useSelector(
    createStructuredSelector({
      card: selectorCard,
    }),
    shallowEqual,
  );

  const [value, setValue] = useState('');

  const filteredCards = card.filter(cards => {
    return cards.title.toLowerCase().includes(value.toLowerCase());
  });

  let fullCard;
  let emptyCard;
  const statusCard = () => {
    if (filteredCards.length !== 0) {
      fullCard = filteredCards.map(item => {
        return (
          <div key={item.id}>
            <Card {...item} />
          </div>
        );
      });
    } else {
      emptyCard = <EmptyCard />;
    }
  };
  statusCard();

  return (
    <>
      <SearchMainWrapper>
        <div className={'searchItemWrapper'}>
          <SearchInput setValue={setValue} value={value} />
        </div>
      </SearchMainWrapper>
      <WrapperItem>
        {fullCard}
        {emptyCard}
      </WrapperItem>
    </>
  );
};

export default Main;
