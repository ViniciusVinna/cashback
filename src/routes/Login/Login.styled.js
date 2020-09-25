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

    @media (min-width: ${theme.breakpoint.l}) {
      flex-direction: row;
    }
  `),
  WelcomeImage: styled('div')(({ theme, image }) => css`
    align-items: center;
    background-color: ${theme.color.n100};
    background-image: url('${image}');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    padding: ${theme.space.xxxl};
    flex: 1;
    justify-content: center;
    min-height: 100%;
    position: relative;

    & > div {
      position: relative;
      width: 100%;
      max-width: ${theme.breakpoint.s};
      z-index: ${theme.zIndex.masked};
    }
    
    :after {
      background-color: ${theme.color.black};
      content: '';
      height: 100%;
      opacity: 0.2;
      position: absolute;
      width: 100%;
      z-index: ${theme.zIndex.default};
    }
  `),
  Content: styled('div')(({ theme }) => css`
    padding: 0 ${theme.space.xxl};
    width: 100%;
    max-width: ${theme.breakpoint.s}
  `),
  ContentGroup: styled('div')(({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    justify-content: center;
    width: 100%;
    min-width: ${theme.breakpoint.xxs};

    @media (min-width: ${theme.breakpoint.xl}) {
      max-width: calc(${theme.breakpoint.xl} / 2);
    }
  `),
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
