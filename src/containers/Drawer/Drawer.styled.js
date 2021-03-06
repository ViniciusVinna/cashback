import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { IoMdArrowBack } from 'react-icons/io';

export const DrawerStyled = {
  BackIcon: styled(IoMdArrowBack)(({ theme }) => css`
    color: ${theme.color.n100};
    cursor: pointer;
    font-size: ${theme.iconSize.m};
  `),
  DrawerWrapper: styled('div')(({ theme, isOpen }) => css`
    backface-visibility: hidden;
    background-color: ${theme.color.n200};
    box-shadow: ${theme.boxShadow.modal};
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: ${theme.breakpoint.l};
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: ${theme.transition.bezier};
    width: 100%;
    max-width: calc(${theme.breakpoint.l} / 2);
    z-index: ${theme.zIndex.drawer};

    @media (min-width: ${theme.breakpoint.xl}) {
      max-width: calc(${theme.breakpoint.xl} / 2);
    }

    @media (min-width: ${theme.breakpoint.xxl}) {
      max-width: calc(${theme.breakpoint.xxl} / 2);
    }

    & > svg {
      width: 100%;
      min-height: 25px;
      max-height: 100px;
    }
  `),
  Header: styled('header')`
    top: 0;
    width: 100%;
  `,
  HeaderContainer: styled('div')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.g500};
    display: flex;
    justify-content: flex-start;
    padding: ${theme.space.xs} ${theme.space.m} 0;
    top: 0;
    width: 100%;

    & h4 {
      color: ${theme.color.n100};
      font-size: ${theme.textSize.l};
      margin: auto;
    }
  `),
  Content: styled('div')(({ theme, extraPadding }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto;
    padding: ${theme.space.xs} ${extraPadding ? theme.space.xl : theme.space.m} ${theme.space.m};
    width: 100%;
    min-width: ${theme.breakpoint.xxs};
    max-width: ${theme.breakpoint.s};

    @media (min-width: ${theme.breakpoint.l}) {
      max-width: calc(${theme.breakpoint.l} / 2);
    }

    & p {
      font-size: ${theme.textSize.m};
      color: ${theme.color.d400};
      margin-bottom: ${theme.space.xl};
    }
  `),
  Overlay: styled('div')(({ theme, isOpen }) => css`
    backface-visibility: hidden;
    background-color: ${theme.color.black};
    bottom: 0;
    left: 0;
    opacity: ${isOpen ? 0.4 : 0};
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    transition: ${theme.transition.bezier};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    z-index: ${theme.zIndex.overlay};
  `),
};
