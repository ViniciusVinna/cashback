import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { FiX } from 'react-icons/fi';

export const DialogStyled = {
  DialogContent: styled('div')(({ theme }) => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: ${theme.space.m} ${theme.space.m};
  `),
  DialogClose: styled(FiX)(({ theme }) => css`
    color: ${theme.color.n100};
    cursor: pointer;
    font-size: ${theme.iconSize.m};
  `),
  DialogHeader: styled('div')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.b500};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -1px;
    padding: ${theme.space.xs} ${theme.space.m};
  `),
  DialogOverlay: styled('div')(({ theme }) => css`
    animation: opacityTransition 0.3s;
    backface-visibility: hidden;
    background-color: ${theme.color.black};
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0.4;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    transition: ${theme.transition.bezier};
    width: 100%;
    will-change: opacity;
    z-index: calc(${theme.zIndex.overlay});

    @keyframes opacityTransition {
      0%   { opacity: 0 }
      100% { opacity: 0.3 }
    }
  `),
  DialogTitle: styled('h4')(({ theme }) => css`
    color: ${theme.color.n100};
    font-size: ${theme.textSize.m};
    font-weight: ${theme.fontWeight.s};
    margin: 0;
  `),
  DialogWrapper: styled('div')(({ theme }) => css`
    animation: transformAnimation 0.25s;
    backface-visibility: hidden;
    background-color: ${theme.color.n200};
    border-radius: ${theme.borderRadius.l};
    box-shadow: ${theme.boxShadow.modal};
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    left: 50%;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - ${theme.space.xxxl});
    max-width: calc(${theme.breakpoint.l} /2);
    will-change: transform;
    z-index: ${theme.zIndex.modal};

    & > svg {
      width: 100%;
      max-height: 100px;
    }

    @keyframes transformAnimation {
      0%   { 
        transform: translate(-50%, -100%);
      }
      100% { 
        transform: translate(-50%, -50%);
      }
    }
  `),
};
