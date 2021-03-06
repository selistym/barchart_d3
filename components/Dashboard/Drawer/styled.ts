import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Container = styled.div``;

export const ModalWrapperStyle = (theme: any) => css`
  position: absolute;
  right: 0;
  top: 0px;
  width: 516px;
  min-height: 100vh;
  padding: 0 40px;
  overflow: auto;
  left: auto;
  transform: none;

  background-color: ${theme.color.grayBackground};
`;

export const Header = styled.div`
  display: flex;
  height: 78px;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyle = (theme: any) => css`
  color: ${theme.color.lightBlack};
`;

export const Content = styled.div``;
