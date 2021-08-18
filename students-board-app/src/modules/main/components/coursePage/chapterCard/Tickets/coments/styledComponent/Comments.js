import styled from 'styled-components';

import { Nero } from '@assets/colors/colors';

export const CommentsItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  p {
    font-weight: bold;
  }
  .pointsItem {
    margin-right: 144px;
  }
`;

export const CommentsItem = styled.div`
  display: flex;
  max-width: 580px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 16px 0;
  .commentItem {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${Nero};
`;
