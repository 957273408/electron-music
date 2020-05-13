import React from "react";
import {
  Redirect,
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import store from "./store";

import Layout from "./page/Layout";
import Welcome from './page/Welcome/index';


const Main = withRouter((props) => <Layout {...props}></Layout>);
// function requireAuth(component: any, props: RouteComponentProps) {
//   if (store.me.hasLogin()) {
//     return React.createElement(component, {
//       ...props,
//     });
//   }
// }

export default () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        {/* <Route exact path="/fm" render={(props) => requireAuth(FM, props)} /> */}
      </Switch>
    </Main>
  );
};
