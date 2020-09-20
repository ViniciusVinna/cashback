import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const BalanceStyled = {
  BalanceWidget: styled('div')(({ theme }) => css`
    background-color: ${theme.color.n100};
    border-radius: ${theme.borderRadius.m};
    box-shadow: ${theme.boxShadow.modal};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 ${theme.space.l};
    overflow: hidden;
    padding: ${theme.space.l};
    position: relative;
    text-align: left;
    z-index: ${theme.zIndex.default};
  `),
  Header: styled('header')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `,
  Info: styled('div')`
    display: flex;
    width: 100%;
  `,
  Item: styled('div')(({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-right: ${theme.space.s};
    width: 100%;
  `),
  ItemValue: styled('div')(({ theme }) => css`
    font-size: ${theme.textSize.l};
    color: ${theme.color.o500};
    display: flex;
    width: 100%;
  `),
  Label: styled('label')(({ theme }) => css`
    color: ${theme.color.d400};
    font-size: ${theme.textSize.s};
    margin-bottom: ${theme.space.xxs};
    width: 100%;
  `),
  Title: styled('label')(({ theme }) => css`
    color: ${theme.color.d500};
    margin-bottom: ${theme.space.s};
  `),
  Value: styled('div')(({ theme }) => css`
    color: ${theme.color.black};
    font-size: ${theme.textSize.xxl};
    font-weight: 800;
    margin-bottom: ${theme.space.l};
  `),
};
