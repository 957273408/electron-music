import React, { useEffect, useState, Props } from "react";
import { Container, Main } from "./layout";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
function layout(props: Props<any>) {
  const [offline, setoffline] = useState(false);

  if (offline) {
    return <div></div>;
  }

  return (
    <Container>
      <Main>{props.children}</Main>
    </Container>
  );
}


const mapStateToProps: MapStateToProps<> = (state) => {
  return {
    todos: state.me,
  };
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

export default connect({
  mapStateToProps,
  mapDispatchToProps,
})(layout);
