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
} from "./styled";
import FadeImage from "../../ui/FadeImage/index";
import Props from "react";
import Indicator from "../../ui/Indicator";

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

  const renderFavorite = () => {
    let [favorite] = list;

    if (favorite.size === 0) return false;

    return (
      <LinkClearfix to={favorite.link || "#"}>
        <Status playing={true} />
        <Hovered>
          <i className="ion-android-arrow-forward" />
        </Hovered>
      </LinkClearfix>
    );
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
            {logined ? renderFavorite() : null}
            {logined ? renderFavorite() : null}
          </List>
        ) : (
          <Placeholder></Placeholder>
        )}
      </main>
    </Container>
  );
};

export default Welcome;
