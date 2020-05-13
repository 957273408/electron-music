import React, { useState } from "react";
import { Container, Main } from "./layoutstyle";
const Layout = (props: any) => {
  const [offline, setoffline] = useState(false);
  window.addEventListener("offline", () => {
    setoffline(true);
  });

  if (offline) {
    return <div></div>;
  }

  return (
    <Container>
      <Main>{props.children}</Main>
    </Container>
  );
};

export default Layout;
