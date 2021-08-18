import styled from 'styled-components';

import { White, Red, Gray } from '@assets/colors/colors';

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  font-size: 16px;
  color: ${Red};
  top: -20px;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 32px;
  border: none;
  padding-bottom: 8px;
  border-bottom: 1px solid ${Gray};
  background: none;
  color: ${White};
  outline: none;
`;
