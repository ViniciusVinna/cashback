import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ButtonStyled = {
  Primary: styled('button')(({ theme, disabled }) => css`
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
  Secondary: styled('button')(({ theme, disabled }) => css`
    -webkit-tap-highlight-color: transparent;
    background-color: ${disabled ? theme.color.n500 : theme.color.secondary};
    border-radius: ${theme.borderRadius.m};
    border: ${theme.borderSize.s} solid ${disabled ? theme.color.n500 : theme.color.secondary};
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
  Default: styled('button')(({ theme, disabled }) => css`
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
