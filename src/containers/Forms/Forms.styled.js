import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  Form: styled('form')(({ theme, noBorder, noMargin }) => css`
    border-bottom: 1px solid ${noBorder ? 'transparent' : theme.color.n400};
    display: flex;
    flex-direction: column;
    margin-bottom:  ${noMargin ? '0' : theme.space.l};
    padding-bottom:  ${noMargin ? '0' : theme.space.l};
    width: 100%;

    & > button {
      margin-top: ${theme.space.s};
    }
  `),
  Label: styled('label')(({ theme }) => css`
    font-size: ${theme.textSize.s};
    color: ${theme.color.d400};
    margin-bottom: ${theme.space.xxs};
  `),
  Money: styled('input')(({ theme, hasError }) => css`
    background-color: ${theme.color.n100};
    border-radius: ${theme.borderRadius.m};
    border: ${theme.borderSize.s} solid ${hasError ? theme.color.danger : theme.color.n400};
    box-shadow: ${theme.boxShadow.default};
    color: ${theme.color.black};
    font-size: ${theme.textSize.xxl};
    height: ${theme.iconSize.xxxl};
    margin-bottom: ${theme.space.s};
    outline: none;
    padding: ${theme.space.s};
    text-align: left;
    transition: ${theme.transition.bezier};
    width: 100%;

    &:focus {
      border-color: ${theme.color.b500};
    }

    ::placeholder {
      color: ${theme.color.n400};
    }
  `),
  Error: styled('div')(({ theme }) => css`
    font-size: ${theme.textSize.xs};
    color: ${theme.color.danger};
    margin: -${theme.space.xxs} 0 ${theme.space.m};
  `),
};
