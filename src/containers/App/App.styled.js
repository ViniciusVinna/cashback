/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      * {
        box-sizing: border-box;

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
