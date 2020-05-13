import styled, { keyframes } from "styled-components";

const animationLine1 = keyframes`
    0% {
      transform:  translateY(0) translateZ(0) ;
    };
    50% {
      transform:  translateY(10px) translateZ(0) ;
    };
    100% {
      transform:  translateY(0) translateZ(0) ;
    };
`;
const animationLine2 = keyframes`
    0% {
      transform:  translateY(10px) translateZ(0) ;
    };
    50% {
      transform:  translateY(0) translateZ(0) ;
    };
    100% {
      transform:  translateY(10px) translateZ(0) ;
    };
`;

export const Container = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  display: inline-block;
  overflow: hidden;

  & span {
    position: absolute;
    background: rgb(92, 188, 125);
    height: 12px;
    left: 1px;
    width: 2px;
    border-radius: 25%;
  }

  & span:nth-child(1) {
    left: 1px;
    animation-name: ${animationLine1};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  & span:nth-child(2) {
    left: 4px;
    animation-name: ${animationLine2};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
  }

  & span:nth-child(3) {
    left: 7px;
    animation-name: ${animationLine2};
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
  }

  & span:nth-child(4) {
    left: 10px;
    animation-name: ${animationLine2};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
