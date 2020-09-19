import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const HeadingStyled = {
  H1: styled('h1')(({ theme }) => css`
    font-size: ${theme.textSize.xxxxl};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    line-height: ${theme.lineHeight.s};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
  H2: styled('h2')(({ theme }) => css`
    font-size: ${theme.textSize.xxxl};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
  H3: styled('h3')(({ theme }) => css`
    font-size: ${theme.textSize.xxl};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    line-height: ${theme.lineHeight.s};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
  H4: styled('h4')(({ theme }) => css`
    font-size: ${theme.textSize.xl};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    line-height: ${theme.lineHeight.s};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
  H5: styled('h5')(({ theme }) => css`
    font-size: ${theme.textSize.l};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    line-height: ${theme.lineHeight.s};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
  H6: styled('h6')(({ theme }) => css`
    font-size: ${theme.textSize.m};
    font-weight: ${theme.font.headingWeight};
    letter-spacing: ${theme.font.headingSpacing};
    line-height: ${theme.lineHeight.s};
    margin: 0 0 ${theme.space.l} 0;
    font-family: ${theme.font.heading};
  `),
};
