import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const AddPurchaseStyled = {
  AddPurchaseWidget: styled('div')(({ theme }) => css`
    align-items: center;
    backface-visibility: hidden;
    background-color: ${theme.color.d100};
    border: 1px solid ${theme.color.n400};
    bottom: 0;
    box-shadow: ${theme.boxShadow.default};
    color: ${theme.color.b500};
    display: flex;
    font-size: ${theme.textSize.s};
    justify-content: center;
    padding: ${theme.space.xl} ${theme.space.s} ${theme.space.s};
    position: fixed;
    width: 100%;
    z-index: ${theme.zIndex.default};
  `),
  PurchaseButtonWrapper: styled('div')`
    align-items: center;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
  `,
  PurchaseButton: styled('button')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.b500};
    border-radius: ${theme.borderRadius.m};
    border: none;
    box-shadow: ${theme.boxShadow.modal};
    display: flex;
    height: ${theme.iconSize.xxl};
    justify-content: center;
    outline: none;
    position: relative;
    width: ${theme.iconSize.xxl};

    & svg {
      font-size: ${theme.iconSize.s};
      color:${theme.color.n100};
    }
  `),
};
