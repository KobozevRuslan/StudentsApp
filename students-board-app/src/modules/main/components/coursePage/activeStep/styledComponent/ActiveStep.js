import styled from 'styled-components';

import done from '@assets/image/Done.png';

import { White, Nero } from '@assets/colors/colors';

export const ActiveStepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 48px 70px 0 0;
`;

export const ActiveStepItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &:last-child .lastLine {
    display: none;
  }
`;

export const ActiveStepCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => (props.status ? `${Nero}` : `${White}`)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveStepLine = styled.div`
  width: 3px;
  min-height: ${props => (props.isExpanded ? '410px' : '136px')};
  background: ${props => (props.lineStatus ? `${Nero}` : `${White}`)};
  transition: all 0.3s linear;
`;

export const Img = styled.img``;

Img.defaultProps = {
  src: done,
};
