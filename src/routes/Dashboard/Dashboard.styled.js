import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  Content: styled('div')(({ theme }) => css`
    padding: 0 ${theme.space.l};
    width: 100%;
    max-width: calc(${theme.breakpoint.xl} /2);
  `),
  DashboardPage: styled('section')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.n200};
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;

    & > svg {
      max-height: 100px;
      width: 100%;
    }
  `),
  Header: styled('header')(({ theme }) => css`
    background: ${theme.color.g500};
    background: linear-gradient(180deg, ${theme.color.g300} 0%,  ${theme.color.g500} 100%);
    margin-bottom: -1px;
    position: relative;
    width: 100%;
  `),
  HeaderWrapper: styled('div')(({ theme }) => css`
    margin: auto;
    text-align: center;
    width: 100%;
    max-width: calc(${theme.breakpoint.xl} /2);
  `),
};
