import styled from 'styled-components'

export const UserHeaderNavContainer = styled.div`

  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }

    &.active {
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }
  }

  .mobileButton {
    padding: 0;

    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.2s;
    }

    &:focus,
    &:hover {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }
  }

  .mobileButtonActive {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;

    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;

      transform: rotate(90deg);
      width: 4px;
      height: 4px;
    }

    &:focus,
    &:hover {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }

    &.active {
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }
  }

  .navMobile {
    display: block;
    position: absolute;
    top: 90px;
    right: 0px;
    padding: 0 1rem;

    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    border-radius: .2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  .navMobileActive {
    transition: .3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    opacity: 1;
    pointer-events: initial;
  }

  .navMobile a,
  .navMobile button {
    display: flex;
    align-items: center;
    justify-content: start;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 2px solid #eee;
    padding: 0.5rem;
    cursor: pointer;
  }

  .navMobile button {
    border-bottom: none;
  }
`
