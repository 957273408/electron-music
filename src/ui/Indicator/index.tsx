import React, { SFC } from "react";
import { Container } from "./style";

type IndicatorProps = {
  style?: React.CSSProperties;
};

const Indicator: SFC<IndicatorProps> = ({ style }) => {
  return (
    <Container style={style}>
      <span />
      <span />
      <span />
      <span />
    </Container>
  );
};

export default Indicator;
