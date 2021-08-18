import styled from 'styled-components';

import { White, Nero } from '@assets/colors/colors';

export const MainWrapper = styled.div`
  background: ${Nero};
  height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  h1 {
    font-size: 48px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  position: relative;
  width: 500px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
  margin-top: 48px;
  font-size: 18px;
  padding: 16px;
  background: ${White};
  border: none;
  cursor: pointer;
`;
