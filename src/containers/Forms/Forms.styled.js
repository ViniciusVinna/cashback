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
  `),
  Label: styled('label')(({ theme }) => css`
    font-size: ${theme.textSize.s};
    color: ${theme.color.d400};
    margin-bottom: ${theme.space.xxs};
  `),
  Error: styled('div')(({ theme }) => css`
    font-size: ${theme.textSize.xs};
    color: ${theme.color.danger};
    margin: -${theme.space.xxs} 0 ${theme.space.m};
  `),
};
