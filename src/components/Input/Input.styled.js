import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  Field: styled('input')(({ theme, hasError }) => css`
    background-color: ${theme.color.n100};
    border-radius: ${theme.borderRadius.m};
    border: ${theme.borderSize.s} solid ${hasError ? theme.color.danger : theme.color.n400};
    box-shadow: ${theme.boxShadow.default};
    color: ${theme.color.black};
    font-size: ${theme.textSize.s};
    height: ${theme.iconSize.xxl};
    outline: none;
    padding: ${theme.space.s} ${theme.space.s} ${theme.space.s} ${theme.space.xl};
    transition: all 0.2s ease-in-out;
    width: 100%;

    &:focus {
      border-color: ${theme.color.b500};
    }

    ::placeholder {
      color: ${theme.color.n400};
    }
  `),
  FieldGroup: styled('div')(({ theme }) => css`
    margin-bottom: ${theme.space.s};
    position: relative;
    width: 100%;

    & svg {
      color: ${theme.color.n500};
      font-size: ${theme.iconSize.xs};
      left: ${theme.space.xs};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  `),
  Submit: styled('button')(({ disabled, theme }) => css`
    -webkit-tap-highlight-color: transparent;
    background-color: ${disabled ? theme.color.n500 : theme.color.primary};
    border-radius: ${theme.borderRadius.m};
    border: ${theme.borderSize.s} solid ${disabled ? theme.color.n500 : theme.color.primary};
    box-shadow: ${theme.boxShadow.default};
    color: ${disabled ? theme.color.black : theme.color.n100};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    font-size: ${theme.textSize.s};
    height: ${theme.iconSize.xxl};
    outline: none;
    overflow: hidden;
    padding: ${theme.space.m} ${theme.space.m};
    position: relative;
    width: 100%;
  `),
};
