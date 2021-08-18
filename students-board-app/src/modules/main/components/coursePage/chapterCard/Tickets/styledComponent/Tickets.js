import styled from 'styled-components';

import downArrow from '@assets/image/Down.png';

import { White, Gray, Nero } from '@assets/colors/colors';

export const ChapterCardWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px 0;
  overflow: hidden;
  font-size: 16px;
`;

export const ChapterCardBlock = styled.div`
  background: ${White};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 924px;
`;

export const ChapterCardBlockWrapper = styled.div`
  padding: 24px 24px 0 24px;
  .itemData {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 32px;
      margin-bottom: 8px;
    }
    .wrapperDeadLine {
      display: flex;
      align-items: center;
      .itemSpan {
        color: ${Gray};
        margin-right: 5px;
      }
      span {
        font-size: 32px;
        font-weight: bold;
      }
      .ratingCircle {
        background: ${Nero};
        border-radius: 50%;
        width: 36px;
        height: 36px;
        color: ${White};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 24px;
      }
    }
  }
`;

export const CommentsWrapper = styled.div`
  max-height: ${props => (props.show ? '430px' : '0')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.3s ease-in;
  .paragraphItem {
    margin: 16px 0 24px 24px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${Nero};
`;

export const CommentsMainItemWrapper = styled.div`
  height: 215px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Gray};
    border-radius: 5px;
    height: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${Nero};
  }
  &:last-child .lastLine {
    display: none;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  padding: 19px 0 19px 27px;
`;

export const BtnArrow = styled.img`
  cursor: pointer;
  transform: ${props => (props.show ? 'rotate(-180deg)' : 'rotate(0deg)')};
  transition: all 0.3s ease-in;
`;

BtnArrow.defaultProps = {
  src: downArrow,
};
