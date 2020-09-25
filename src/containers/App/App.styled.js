/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import styled from '@emotion/styled';

export const AppStyled = {
  AppWrapper: styled('div')(({ theme, isLoading }) => css`
    filter: ${isLoading ? 'blur(2px)' : 'blur(0)'};
    height: 100vh;
    overflow: ${isLoading ? 'hidden' : 'visible'};
    position: relative;
    transition: ${theme.transition.bezier};
    width: 100vw;
  `),
};

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;

        &:after,
        &:before {
          box-sizing: inherit;
        }
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
