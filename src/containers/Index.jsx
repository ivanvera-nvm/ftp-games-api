import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Body from "../components/Body";
import Styled from "../components/Styled";
import App from "./App";

export default function Index() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/body" component={Body} />
        <Route exact path="/games" />
        <Route exact path="/styled" component={Styled} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
