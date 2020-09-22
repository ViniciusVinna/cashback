import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  LoginPage: styled('section')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.n200};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  `),
  Content: styled('div')(({ theme }) => css`
    padding: 0 ${theme.space.xxl};
    width: 100%;
  `),
  ContentGroup: styled('div')`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    width: 100%;
  `,
  Copyright: styled('div')(({ theme }) => css`
    color: ${theme.color.d500};
    font-size: ${theme.textSize.s};
    margin-top: auto;
    padding: ${theme.space.s};
    text-align: center;
    width: 100%;

    & span {
      font-size: ${theme.textSize.xs};
      padding: 0 ${theme.space.xxs};
    }
  `),
  Header: styled('header')`
    width: 100%;
    margin-bottom: auto;
  `,
  HeaderWrapper: styled('div')(({ theme }) => css`
    background: ${theme.color.g500};
    background: linear-gradient(180deg, ${theme.color.g300} 0%,  ${theme.color.g500} 100%);
    width: 100%;
    text-align: center;

    & div {
      height: calc(${theme.iconSize.xxxl} * 2)
    }
  `),
};
