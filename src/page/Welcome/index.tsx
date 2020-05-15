import React, { useState, SFC } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navs,
  Profile,
  Info,
  Menu,
  List,
  Placeholder,
  LinkClearfix,
  StatusDiv,
  Hovered,
  Figure,
} from "./styled";
import FadeImage from "../../ui/FadeImage/index";
import Props from "react";
import Indicator from "../../ui/Indicator";
import ProgressImage from "../../ui/ProgressImage";

type Props = {
  playing: boolean;
};

// 音乐条组件
const Status: SFC<Props> = ({ playing }) => {
  if (!playing) return null;
  return (
    <StatusDiv>
      <Indicator></Indicator>
    </StatusDiv>
  );
};

const Welcome = () => {
  // 是否登录
  let logined = true;
  //
  let list: [any] = [{ id: 1, size: 66 }];

  // 菜单选项
  const menuarr = [
    { to: "/search", text: "Search" },
    { to: "/playlist/全部", text: "Playlist" },
    { to: "/top", text: "Top podcasts" },
    { to: "/fm", text: " Made For You", playlistId: "PERSONAL_FM" },
  ];
  const checkClass = () => {
    if (true) return "playing";
    return "";
  };
  const renderMenu = () =>
    menuarr.map((item) => (
      <p>
        <Link className={item?.playlistId && checkClass()} to={item.to}>
          {item.text}
        </Link>
      </p>
    ));

  // 角色信息
  const renderProfile = () => {
    const link = `/user/555`;
    const [state, setstate] = useState(
      "https://yyb.gtimg.com/fibadcms_img/adcms/94e420cb65c290c9a06bf90ce459d2fe1587714845581042.png"
    );

    return (
      <Profile>
        <Link className="clearfix" to="/">
          <FadeImage src={state} />
        </Link>
        <Info>
          <p title="dkjkjk">
            <Link to={link}>dkjkjk</Link>
          </p>
          <span>'No signature~'</span>
        </Info>
      </Profile>
    );
  };

  // 播放器组件
  const renderFavorite = () => {
    let [favorite] = list;

    if (favorite.size === 0) return false;
    return (
      <LinkClearfix to={favorite.link || "#"}>
        <Status playing={true} />
        <Hovered>
          <i className="ion-android-arrow-forward" />
        </Hovered>
        <Figure className="favorite">
          <ProgressImage
            className="background"
            width={360}
            src={
              "https://yyb.gtimg.com/fibadcms_img/adcms/f3ccdd27d2000e3f9255a7e3e2c488001588904801228146.jpg"
            }
          />
          <figcaption>
            <ProgressImage
              className="cover"
              height={50}
              width={50}
              src="https://yyb.gtimg.com/fibadcms_img/adcms/f3ccdd27d2000e3f9255a7e3e2c488001588904801228146.jpg"
            />
            <summary>
              <p>1231546</p>
              <small>2020.15.20</small>
            </summary>
          </figcaption>
        </Figure>
      </LinkClearfix>
    );
  };

  const renderRecommend = () => {
    return (
      <LinkClearfix to="#">
        <Status playing={true}></Status>
        <Hovered>
          <i className="ion-android-arrow-forward" />
        </Hovered>
        <Figure className="recommend"></Figure>
      </LinkClearfix>
    );
  };

  const renderPlaylist = () => {
    const list: [any, any] = [{}, { type: true }];

    return list.map((item, index) => {
      return (
        <LinkClearfix to="#" key={index}>
          <Status playing={true}></Status>
          <Hovered>
            <i className="ion-android-arrow-forward" />
          </Hovered>
          <Figure className="large">
            <ProgressImage
              className={item.type ? "background" : "background album"}
              width={360}
              src="https://nutty.gtimg.com/img/202004/ed20e8ca-cf6a-4a2d-b401-1b36b9656793.png"
            ></ProgressImage>
            <figcaption>
              <ProgressImage
                {...{
                  className: "cover",
                  width: 50,
                  height: 50,
                  src:
                    "https://nutty.gtimg.com/img/202004/ed20e8ca-cf6a-4a2d-b401-1b36b9656793.png",
                }}
              />
            </figcaption>
          </Figure>
        </LinkClearfix>
      );
    });
  };

  return (
    <Container>
      <main>
        <Navs>
          {logined ? renderProfile() : <Link to="/login/0">sigin in</Link>}
          <Menu>{renderMenu()}</Menu>
        </Navs>
        {list.length ? (
          <List>
            {logined ? renderFavorite() : null}
            {logined ? renderRecommend() : null}
            {logined ? renderPlaylist() : null}
          </List>
        ) : (
          <Placeholder></Placeholder>
        )}

        
      </main>
    </Container>
  );
};

export default Welcome;
