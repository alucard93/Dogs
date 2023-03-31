import styled from 'styled-components'

export const FeedPhotosItemContainer = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  & > div {
    grid-area: 1/1;
  }

  .view {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }

  .view::before {
    width: 16px;
    height: 16px;
    content: '';
    display: inline-block;
    margin-right: .25rem;
    background-image: ${({ view }) => `url(${view})`};
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:hover > .view {
      display: flex;
    }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`
