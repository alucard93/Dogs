import styled from "styled-components";

export const FeedModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, .4);
  display: flex;
  z-index: 999;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
  
  @media (max-with: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`