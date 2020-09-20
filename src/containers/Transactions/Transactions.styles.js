import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const TransactionsStyled = {
  Code: styled('span')(({ theme, isActive }) => css`
    color: ${isActive ? theme.color.n100 : theme.color.b500};
    font-size: ${theme.textSize.s};
    margin-bottom: ${theme.space.xs};

    & span {
      color: ${isActive ? theme.color.n100 : theme.color.d400};
      font-size: ${theme.textSize.xs};
      font-weight: 400;
      margin-right: ${theme.space.xs};
    }
  `),
  Content: styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Date: styled('div')(({ theme, isActive }) => css`
    color: ${isActive ? theme.color.n100 : theme.color.d500};
    font-size: ${theme.textSize.s};
    font-weight: 400;

    & span {
      font-size: ${theme.textSize.xs};
      color: ${isActive ? theme.color.n100 : theme.color.d400};
      margin-right: ${theme.space.xs};
    }
  `),
  Line: styled('div')`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  `,
  Transaction: styled('div')(({ theme, isActive }) => css`
    -webkit-tap-highlight-color: transparent;
    background-color: ${isActive ? theme.color.b500 : theme.color.n100};
    border-radius: ${theme.borderRadius.m};
    box-shadow: ${theme.boxShadow.default};
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: ${theme.space.s};
    overflow: hidden;
    padding: ${theme.space.s};
    position: relative;
    transition: ${theme.transition.bezier};
    width: 100%;

    :hover {
      background-color: ${isActive ? theme.color.b500 : theme.color.n100};
    }
  `),
  TransactionsWrapper: styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Value: styled('div')(({ theme, isActive }) => css`
    align-items: center;
    color: ${isActive ? theme.color.n100 : theme.color.d500};
    display: flex;
    font-size: ${theme.textSize.m};
    margin-left: auto;
    white-space: nowrap;
  `),
};
