import styled from 'styled-components'

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }
    .forms {
      max-width: 100%;
    }
  }
`
