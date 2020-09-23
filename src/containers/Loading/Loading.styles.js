import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const LoadingStyled = {
  LoadingWrapper: styled('div')(({ theme, isLoading }) => css`
    align-items: center;
    backface-visibility: hidden;
    background-color: ${theme.color.n100};
    bottom: 0;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: ${isLoading ? '0.9' : '0'};
    padding: ${theme.space.xl};
    pointer-events: ${isLoading ? 'none' : 'all'};
    position: fixed;
    right: 0;
    top: 0;
    transition: ${theme.transition.bezier};
    width: 100%;
    z-index: ${isLoading ? theme.zIndex.loading : theme.zIndex.deep};

    & #loading {
      width: 100%;
      max-width: 300px;
    }
  `),
};
