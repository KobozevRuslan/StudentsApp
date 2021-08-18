import React from 'react';
import { Link } from 'react-router-dom';

import { PathMain } from '../../routePath';

import { HeaderMainWrapper, Image } from './styledComponent/Header';

const Header = () => {
  return (
    <HeaderMainWrapper>
      <div className={'headerWrapper'}>
        <Link to={PathMain}>
          <Image />
        </Link>
      </div>
    </HeaderMainWrapper>
  );
};

export default Header;
