import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ProfileStyled = {
  ProfileWrapper: styled('div')(({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: ${theme.space.m};
    width: 100%;
  `),
  Avatar: styled('figure')(({ theme }) => css`
    border-radius: 50px;
    height: ${theme.iconSize.l};
    margin: 0;
    overflow: hidden;
    width: ${theme.iconSize.l};

    & img {
      width: 100%;
    }
  `),
  Username: styled('div')(({ theme }) => css`
    width: calc(100% - ${theme.iconSize.xl});
    display: flex;
    align-items: center;
    height: auto;
    color: ${theme.color.n100};
    padding-left: ${theme.space.s};

    & > h6 {
      display: inline-block;
      margin: 0;
    }
`),
};
