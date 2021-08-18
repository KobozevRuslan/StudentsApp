import styled from 'styled-components';

import { Black, Nero } from '@assets/colors/colors';

export const SearchMainWrapper = styled.div`
  background: ${Nero};
  .searchItemWrapper {
    width: 1220px;
    display: flex;
    justify-content: flex-end;
    font-size: 32px;
    padding-bottom: 20px;
  }
`;

export const WrapperItem = styled.div`
  width: 1140px;
  margin: 0 auto;
  color: ${Black};
  padding: 16px 0 40px 0;
`;
