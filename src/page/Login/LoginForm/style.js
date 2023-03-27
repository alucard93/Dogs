import styled from "styled-components";

export const LoginFormContainer = styled.section`
  .form {
    margin-bottom: 2rem;
  }

  .perdeu {
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;
  }

  .perdeu::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }

  .cadastro {
    margin-top: 4rem;
  }

  .cadastro p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .subtitle {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }

  .subtitle::after {
    content: '';
    display: block;
    background: #ddd;
    height: .5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`