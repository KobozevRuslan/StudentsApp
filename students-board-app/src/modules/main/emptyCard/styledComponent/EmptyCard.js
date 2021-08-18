import styled from 'styled-components';

import { White } from '@assets/colors/colors';

export const EmptyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1030px;
  background: ${White};
  border-radius: 15px;
  margin: 16px 0;
  .itemEmptyCard {
    padding: 24px 24px 16px 24px;
    p {
      font-size: 21px;
      text-align: center;
    }
  }
`;
