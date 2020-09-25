import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const TransactionsStyled = {
  Code: styled('span')(({ theme, isActive }) => css`
    color: ${isActive ? theme.color.n100 : theme.color.black};
    font-size: ${theme.textSize.xs};
    margin-bottom: ${theme.space.xs};

    & span {
      color: ${isActive ? theme.color.n100 : theme.color.d400};
      font-size: ${theme.textSize.xxs};
      font-weight: ${theme.fontWeight.s};
      margin-right: ${theme.space.xs};
    }
  `),
  Content: styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Date: styled('div')(({ theme }) => css`
    color: ${theme.color.d500};
    font-size: ${theme.textSize.xs};
    font-weight: ${theme.fontWeight.m};
    margin-bottom: ${theme.space.xs};
  `),
  DetailsWrapper: styled('div')`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 100%;
  `,
  Detail: styled('div')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.n200};
    box-shadow: ${theme.boxShadow.tooltip};
    color: ${theme.color.black};
    display: flex;
    flex-wrap: nowrap;
    font-size: ${theme.textSize.s};
    justify-content: space-between;
    margin-bottom: 1px;
    padding: ${theme.space.s} 0;
    width: 100%;
    
    span {
      align-items: center;
      word-break: break-word;
      word-wrap: break-word;
    }
  `),
  DetailIcon: styled('div')(({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.n300};
    border-radius: ${theme.borderRadius.m};
    box-shadow: ${theme.boxShadow.default};
    color: ${theme.color.d400};
    display: flex;
    flex: 0 0 ${theme.iconSize.xl};
    height: ${theme.iconSize.xl};
    justify-content: center;
    margin-right: ${theme.space.s};
    width: ${theme.iconSize.xl};

    svg {
      font-size: ${theme.iconSize.xs};
    }
  `),
  DetailValue: styled('div')(({ theme }) => css`
    align-items: center;
    color: ${theme.color.black};
    display: flex;
    flex-wrap: nowrap;
    font-weight: ${theme.fontWeight.m};
    justify-content: flex-end;
    text-align: right;
    width: 100%;
  `),
  Icon: styled('div')(({ theme, isActive }) => css`
    align-items: center;
    background-color: ${isActive ? theme.color.b500 : theme.color.n200};
    border-radius: ${theme.borderRadius.m};
    border: 1px solid ${isActive ? theme.color.n100 : 'transparent'};
    display: flex;
    flex: 0 0 ${theme.iconSize.l};
    height: ${theme.iconSize.l};
    justify-content: center;
    margin-right: ${theme.space.s};
    width: ${theme.iconSize.l};

    & svg {
      color: ${isActive ? theme.color.n100 : theme.color.b500};;
    }
  `),
  Label: styled('div')(({ theme }) => css`
    align-items: center;
    color: ${theme.color.black};
    display: flex;
    font-weight: ${theme.fontWeight.s};
    margin-right: ${theme.space.xl};
    width: 100%;
  `),
  Status: styled('div')(({ theme, isActive, status }) => css`
    color: ${isActive ? theme.color.n100 : theme.color[status]};
    font-size: ${theme.textSize.xs};
    font-weight: ${theme.fontWeight.s};
    position: relative;
`),
  Transaction: styled('div')(({ theme, isActive }) => css`
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    background-color: ${isActive ? theme.color.b500 : theme.color.n100};
    box-shadow: ${theme.boxShadow.default};
    cursor: pointer;
    display: flex;
    margin-bottom: 1px;
    overflow: hidden;
    padding: ${theme.space.s};
    position: relative;
    transition: ${theme.transition.bezier};

    &:first-of-type {
      border-radius: ${theme.borderRadius.m} ${theme.borderRadius.m} 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 ${theme.borderRadius.m} ${theme.borderRadius.m};
    }

    &:only-of-type {
      border-radius: ${theme.borderRadius.m} ${theme.borderRadius.m};
    }

    :hover {
      background-color: ${isActive ? theme.color.b500 : theme.color.n100};
    }
  `),
  TransactionsWrapper: styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  TransactionsGroup: styled('div')(({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${theme.space.xl};

    &:last-of-type {
      margin-bottom: 0;
    }
  `),
  Empty: styled('div')(({ theme }) => css`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    width: 100%;
    color: ${theme.color.d400};

    & > div {
      max-width: 150px;
    }
  `),
  Value: styled('div')(({ theme, isActive }) => css`
    align-items: center;
    color: ${isActive ? theme.color.n100 : theme.color.black};
    display: flex;
    font-size: ${theme.textSize.m};
    font-weight: ${theme.fontWeight.m};
    margin-left: auto;
    white-space: nowrap;

    & svg {
      color: ${isActive ? theme.color.n100 : theme.color.d300};
      font-size: ${theme.textSize.l};
      margin-left: ${theme.space.xs};
    }
  `),
};
