/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

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
