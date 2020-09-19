import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default {
  Form: styled('form')(({ theme }) => css`
    border-bottom: 1px solid ${theme.color.n400};
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.space.l};
    padding-bottom: ${theme.space.l};
  `),
  Label: styled('label')(({ theme }) => css`
    font-size: ${theme.textSize.s};
    color: ${theme.color.d400};
    margin-bottom: ${theme.space.xxs};
  `),
};
