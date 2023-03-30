import styled from 'styled-components'

export const PhotoCommentsFormContainer = styled.div`
  & > form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
  }

  textarea {
    display: block;
    width: 100%;

    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;

    &:focus,
    &:hover {
      outline: none;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus svg path,
    &:hover svg path {
      fill: #fea;
      stroke: #fb1;
    }
    
  }

  &:focus svg g,
    &:hover svg g {
      animation: latir .6s infinite;
    }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
