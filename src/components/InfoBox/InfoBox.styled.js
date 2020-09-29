import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const InfoboxStyled = {
  List: styled('ul')(({ theme }) => css`
    background-color: ${theme.color.n300};
    border-radius: ${theme.borderRadius.m};
    color: ${theme.color.d400};
    font-size: ${theme.textSize.xs};
    line-height: ${theme.lineHeight.s};
    list-style: none;
    margin: ${theme.space.m} 0 0 0;
    padding: ${theme.space.m};
  `),
  Item: styled('li')(({ theme }) => css`
    border-bottom: 1px solid ${theme.color.d200};
    padding: ${theme.space.xs} 0;

    &:last-of-type {
      border: none;
    }

    & span {
      color: ${theme.color.d500};
      font-weight: ${theme.fontWeight.m};
    }
  `),
};
