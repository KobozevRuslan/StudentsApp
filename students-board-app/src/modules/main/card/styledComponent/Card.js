import styled from 'styled-components';

import arrow from '@assets/image/Arrow.png';
import { Nero, Gray, White, Black } from '@assets/colors/colors';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1030px;
  background: ${White};
  border-radius: 15px;
  margin: 16px 0;
  .itemCardWrapper {
    padding: 24px 24px 16px 24px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  .itemRating {
    background: ${Black};
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: ${White};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mentorName {
    font-weight: bold;
  }
`;

export const ItemDirection = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  max-width: 850px;
  .itemDirectionName {
    background: ${Black};
    color: ${White};
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 0 8px 8px 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${Nero};
  margin-bottom: 21px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 32px;
  margin-right: 26px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${Black};
    padding-left: 5px;
    padding-bottom: 18px;
    font-weight: bold;
  }
  span {
    color: ${Gray};
  }
`;

export const ArrowImage = styled.img`
  padding-top: 5px;
  padding-left: 11px;
`;

ArrowImage.defaultProps = {
  src: arrow,
};
