import styled from 'styled-components';

import eye from '@assets/image/Show.png';

import { White, Red, GrimmysGrey } from '@assets/colors/colors';

export const ItemTitle = styled.p`
  margin-top: 40px;
  color: ${GrimmysGrey};
  text-transform: capitalize;
`;

export const Input = styled.input`
  border: none;
  background: none;
  padding-top: 10px;
  color: ${White};
  outline: none;
  font-size: 24px;
  width: 470px;
  &[type='email'] {
    width: 500px;
  }
  &[type='password'] {
    letter-spacing: 15px;
  }
  &::placeholder {
    letter-spacing: 0;
    color: ${White};
    opacity: 0.8;
  }
`;

export const Line = styled.div`
  width: 500px;
  height: 2px;
  background: ${White};
  opacity: 50%;
  margin-top: 10px;
`;

export const Eye = styled.img`
  cursor: pointer;
`;

Eye.defaultProps = {
  src: eye,
};

export const ErrorMessage = styled.div`
  color: ${Red};
`;
