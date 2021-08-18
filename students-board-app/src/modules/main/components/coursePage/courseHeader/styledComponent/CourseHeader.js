import styled from 'styled-components';

import { White, Nero } from '@assets/colors/colors';

export const HeaderMainWrapper = styled.div`
  background: ${Nero};
  .headerWrapper {
    max-width: 1240px;
    margin: 0 auto;
    font-size: 16px;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  .headerWrapperItem {
    display: flex;
    align-items: center;
    h2 {
      font-size: 32px;
      margin: 0 8px 0 11px;
    }
    .itemRatingCircle {
      background: ${White};
      border-radius: 50%;
      width: 36px;
      height: 36px;
      color: ${Nero};
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
    }
  }
  .itemMentor {
    width: 165px;
    p {
      font-weight: bold;
    }
  }
`;

export const ItemDirection = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 32px 0 24px;
  font-size: 20px;
  .itemDirectionName {
    background: ${White};
    color: ${Nero};
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 0 8px 8px 0;
  }
`;
