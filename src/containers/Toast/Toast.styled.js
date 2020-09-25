import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled('div')(({ theme }) => css`
  .Toastify__toast {
    border-radius: ${theme.borderRadius.m};
    box-shadow: ${theme.boxShadow.modal};
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    min-height: ${theme.iconSize.xl};
    overflow: hidden;
    padding: 0;
    position: relative;
    
    &-body{
      font-size: ${theme.textSize.s};
      line-height: ${theme.lineHeight.s};
      padding: ${theme.space.m};
    }

    &-container {
      backface-visibility: hidden;
      box-sizing: border-box;
      color: ${theme.color.n100};
      max-width: 320px;
      padding: ${theme.space.xs};
      position: fixed;
      transform: translate3d(0, 0, 9999);
      width: 100%;
      z-index: ${theme.zIndex.toast};
      
      &--top-center {
        left: 50%;
        margin-left: -160px;
        top: 1em;
      }

      &--top-right {
        right: 1em;
        top: 5em;
      }

      &--bottom-left {
        left: 1em;
        bottom: 1em;
      }

      &--bottom-right {
        right: 1em;
        bottom: 1em;
      }
      
      &--bottom-center {
        bottom: 1em;
        left: 50%;
        margin-left: -160px;
      }
    }

    &--info {
      background: ${theme.color.info};
    }
    
    &--success {
      background: ${theme.color.success};
    }

    &--warning {
      background: #${theme.color.warning};
    }

    &--error {
      background: ${theme.color.danger};
    }
  }

  .Toastify__close-button {
    align-self: flex-start;
    background: transparent;
    border: none;
    color: ${theme.color.n100};
    cursor: pointer;
    font-size: ${theme.textSize.m};
    font-weight: ${theme.fontWeight.l};
    opacity: 0.7;
    outline: none;
    padding: 0;
    transition: 0.3s ease;
    
    &--default {
      color: ${theme.color.d500};
      opacity: 0.3;
    }

    &:hover, &:focus {
      opacity: 1;
    }
  }
`);

export const AnimationBounce = styled('div')`
  @keyframes Toastify__bounceInRight {
      from,
      60%,
      75%,
      90%,
      to {
          animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      from {
          opacity: 0;
          transform: translate3d(3000px, 0, 0);
      }
      60% {
          opacity: 1;
          transform: translate3d(-25px, 0, 0);
      }
      75% {
          transform: translate3d(10px, 0, 0);
      }
      90% {
          transform: translate3d(-5px, 0, 0);
      }
      to {
          transform: none;
      }
    }

    @keyframes Toastify__bounceOutRight {
        20% {
            opacity: 1;
            transform: translate3d(-20px, 0, 0);
        }
        to {
            opacity: 0;
            transform: translate3d(2000px, 0, 0);
        }
    }

    @keyframes Toastify__bounceInLeft {
        from,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }
        0% {
            opacity: 0;
            transform: translate3d(-3000px, 0, 0);
        }
        60% {
            opacity: 1;
            transform: translate3d(25px, 0, 0);
        }
        75% {
            transform: translate3d(-10px, 0, 0);
        }
        90% {
            transform: translate3d(5px, 0, 0);
        }
        to {
            transform: none;
        }
    }

    @keyframes Toastify__bounceOutLeft {
        20% {
            opacity: 1;
            transform: translate3d(20px, 0, 0);
        }
        to {
            opacity: 0;
            transform: translate3d(-2000px, 0, 0);
        }
    }

    @keyframes Toastify__bounceInUp {
        from,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }
        from {
            opacity: 0;
            transform: translate3d(0, 3000px, 0);
        }
        60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0);
        }
        75% {
            transform: translate3d(0, 10px, 0);
        }
        90% {
            transform: translate3d(0, -5px, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes Toastify__bounceOutUp {
        20% {
            transform: translate3d(0, -10px, 0);
        }
        40%,
        45% {
            opacity: 1;
            transform: translate3d(0, 20px, 0);
        }
        to {
            opacity: 0;
            transform: translate3d(0, -2000px, 0);
        }
    }

    @keyframes Toastify__bounceInDown {
        from,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }
        0% {
            opacity: 0;
            transform: translate3d(0, -3000px, 0);
        }
        60% {
            opacity: 1;
            transform: translate3d(0, 25px, 0);
        }
        75% {
            transform: translate3d(0, -10px, 0);
        }
        90% {
            transform: translate3d(0, 5px, 0);
        }
        to {
            transform: none;
        }
    }

    @keyframes Toastify__bounceOutDown {
        20% {
            transform: translate3d(0, 10px, 0);
        }
        40%,
        45% {
            opacity: 1;
            transform: translate3d(0, -20px, 0);
        }
        to {
            opacity: 0;
            transform: translate3d(0, 2000px, 0);
        }
    }

    .Toastify__bounce-enter {
        &--top-left,
        &--bottom-left {
            animation-name: Toastify__bounceInLeft;
        }
        &--top-right,
        &--bottom-right {
            animation-name: Toastify__bounceInRight;
        }
        &--top-center {
            animation-name: Toastify__bounceInDown;
        }
        &--bottom-center {
            animation-name: Toastify__bounceInUp;
        }
    }

    .Toastify__bounce-exit {
        &--top-left,
        &--bottom-left {
            animation-name: Toastify__bounceOutLeft;
        }
        &--top-right,
        &--bottom-right {
            animation-name: Toastify__bounceOutRight;
        }
        &--top-center {
            animation-name: Toastify__bounceOutUp;
        }
        &--bottom-center {
            animation-name: Toastify__bounceOutDown;
        }
    }
`;

export const Progress = styled('div')(({ theme }) => css`
  @keyframes Toastify__trackProgress {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0); }
  }

  .Toastify__progress-bar {
    background-color: rgba(255,255,255,.7);
    bottom: 0;
    height: ${theme.space.xxs};
    left: 0;
    position: absolute;
    transform-origin: left;
    width: 100%;
    
    &--animated {
      animation: Toastify__trackProgress linear 1 forwards;

      &--controlled {
        transition: transform .2s;
      }

      &--rtl {
        right: 0;
        left: initial;
        transform-origin: right;
      }

      &--default{
        background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
      }
    }
  }
`);
