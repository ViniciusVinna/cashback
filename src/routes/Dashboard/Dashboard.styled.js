import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  Content: styled('div')(({ theme }) => css`
    padding: 0 ${theme.space.l};
    width: 100%;
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
  `),
  Header: styled('header')(({ theme }) => css`
    background-color: ${theme.color.g500};
    width: 100%;
  `),
  HeaderWrapper: styled('div')(({ theme }) => css`
    background-color: ${theme.color.g500};
    width: 100%;
    text-align: center;
  `),
};
