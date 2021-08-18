import styled from 'styled-components';

import { Nero } from '@assets/colors/colors';

import logo from '@assets/image/Logo.png';

export const HeaderMainWrapper = styled.div`
  background: ${Nero};
  .headerWrapper {
    max-width: 1240px;
    margin: 0 auto;
    height: 200px;
    a {
      color: white;
    }
  }
`;

export const Image = styled.img`
  margin: 25px 0 185px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

Image.defaultProps = {
  src: logo,
};
