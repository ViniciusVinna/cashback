import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ProfileStyled = {
  Avatar: styled('figure')(({ theme }) => css`
    border-radius: ${theme.borderRadius.xl};
    height: ${theme.iconSize.l};
    margin: 0;
    overflow: hidden;
    width: ${theme.iconSize.l};

    & img {
      width: 100%;
    }
  `),
  ProfileBrand: styled('div')(({ theme }) => css`
    height: ${theme.iconSize.xl};
    margin: 0;
    overflow: hidden;
    width: ${theme.iconSize.xl};

    & > div {
      height: ${theme.iconSize.xl};
    }
  `),
  ProfileWrapper: styled('div')(({ theme }) => css`
    align-items: center;
    display: flex;
    padding: ${theme.space.m};
    width: 100%;
  `),
  Username: styled('div')(({ theme }) => css`
    color: ${theme.color.n100};
    display: flex;
    height: auto;
    margin: 0 auto;
    width: auto;

    & > h6 {
      display: inline-block;
      margin: 0;
    }
`),
};
