import styled from "styled-components";

export const LoadingStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 999;

  .loading {
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, .5);
    padding-left: 5px;
  }
`