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
    backdrop-filter: blur(2px);
    backface-visibility: hidden;
    background-color: ${theme.color.shadow};
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: calc(${theme.zIndex.overlay});
  `),
  DialogTitle: styled('h4')(({ theme }) => css`
    color: ${theme.color.n100};
    font-size: ${theme.textSize.m};
    font-weight: ${theme.fontWeight.s};
    margin: 0;
  `),
  DialogWrapper: styled('div')(({ theme }) => css`
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
      z-index: ${theme.zIndex.modal};
    `),
};
