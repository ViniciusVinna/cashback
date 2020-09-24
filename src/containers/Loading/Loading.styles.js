import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const LoadingStyled = {
  LoadingWrapper: styled('div')(({ theme }) => css`
    align-items: center;
    animation: opacityTransition 0.5s;
    backface-visibility: hidden;
    background-color: ${theme.color.n100};
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0.9;
    overflow: hidden;
    padding: ${theme.space.xl};
    pointer-events: all;
    position: fixed;
    right: 0;
    top: 0;
    transition: ${theme.transition.bezier};
    width: 100%;
    will-change: opacity;
    z-index: ${theme.zIndex.loading};

    & #loading {
      align-self: center;
      margin: auto;
      width: 100%;
      max-width: 300px;
    }

    @keyframes opacityTransition {
      0%   { opacity: 0; }
      100% { opacity: 0.9; }
    }
  `),
  Status: styled('div')(({ theme }) => css`
    color: ${theme.color.d400};
    bottom: 0;
    height: auto;
    max-width: 300px;
    padding: ${theme.space.xl} ${theme.space.xl};
    position: absolute;
    text-align: center;
    width: 100%;
  `),
};
