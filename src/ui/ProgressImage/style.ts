import styled from "styled-components";

export const Main = styled.img`
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease-out;
`;

export const Thumb = styled.div`
  & img {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-out;
    filter: blur(30px);
  }

  &.loaded>img {
    opacity: 1;
  }
`;

export const Container = styled.figure`
  position: relative;
  padding: 0;
  margin: 0;
  background: #ddd;
  overflow: hidden;

  & img {
    height: auto;
    pointer-events: none;
  }
  &.loaded {
    & ${Main} {
      opacity: 1;
    }

    & ${Thumb} img {
      opacity: 1;
    }
  }
`;
