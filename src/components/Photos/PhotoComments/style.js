import styled from "styled-components";

export const PhotoCommentContainer = styled.ul`
  overflow-y: auto;
  word-break: break-all;
  height: 100%;
  max-height: 250px;
  
  
  & > li {
    
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`