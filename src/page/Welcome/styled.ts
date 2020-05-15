import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const Navs = styled.aside`
  padding-left: 50px;
  padding-top: 80px;
  font-weight: 300px;
  color: white;
  a: {
    color: inherit !important;
  }

  nav a:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20px;
    width: 0;
    background: red;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.2s ease-out;
    z-index: -1;
  }

  & nav a:hover:after,
  & nav .playing:after {
    opacity: 1;
    width: 110%;
  }

  & nav p {
    margin: 0;
    margin-bottom: 24px;
  }
`;

export const Profile = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & img {
    height: 64px;
    width: 64px;
    border-radius: 64px;
    margin-right: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: HelveticaNeue;
  font-weight: lighter;
  transform: translateY(-3px);

  & p {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: 24px;
    letter-spacing: 1;
    text-indent: 0;
    max-width: 200px;
    word-spacing: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & span {
    font-size: 14px;
    letter-spacing: 2;
    color: #eee;
  }
`;

export const Menu = styled.nav`
  margin-top: 100px;
  & a {
    position: relative;
    font-size: 20px;
    text-indent: 4px;
    letter-spacing: 2;
    cursor: pointer;
  }
`;

export const List = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  padding-left: 16px;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: auto;
`;

export const Placeholder = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  height: 100vh;
  background-image: linear-gradient(
    110deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 45, 240) 100%
  );
`;

export const Hovered = styled.div`
  position: absolute;
  top: 50%;
  left: -16px;
  margin-top: -16px;
  display: flex;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background: rgb(92, 188, 125);
  color: white;
  z-index: 3;
  opacity: 0;
  transform: scale(0.8);
  transition: 0.5s;
`;

export const LinkClearfix = styled(Link)`
  position: relative;
  display: block;

  &:hover ${Hovered} {
    opacity: 1;
    transform: scale(1);
  }

  &:hover [class="Component-status-"] {
    opacity: 0;
    transform: scale(0.8);
  }

  &:hover .background {
    transform: translateY(-50%) scale(1.1);
  }

  &:hover .album.background {
    transform: translateY(-8px) scale(1.1);
  }
`;

export const StatusDiv = styled.div`
  position: absolute;
  top: 50%;
  left: -16px;
  margin-top: -16px;
  display: flex;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 2;
  transition: 0.2s;
`;

export const Figure = styled.figure`
  position: relative;
  height: 120px;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(
    110deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 45, 240) 100%
  );
  font-family: Roboto;
  font-weight: lighter;
  color: white;
  overflow: hidden;

  & figcaption {
    position: absolute;
    top: 50%;
    left: 100px;
    margin-top: -25px;
    display: flex;
    flex-direction: row;
    z-index: 2;
  }

  & summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 7px 0;
    padding-left: 20px;
  }
  & .background {
    transition: 0.2s;
    transform: translateY(-50%) scale(1);
  }

  & .cover {
    box-shadow: 0 0 24px red;
  }
  & summary p {
    margin: 0;
    font-size: 14px;
    max-width: 180;
    word-spacing: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & summary small {
    font-size: 12px;
    color: #eee;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }

  &.favorite {
    &::after {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  &.recommend {
    &::after {
      content: none;
    }
  }
  &.large {
    height: 160px;
    & summary p {
      color: #000;
    }
    & summary small {
      color: #333;
    }
  }

  & .album {
    transform: translateY(-8px);
  }
`;
