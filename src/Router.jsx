import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Counter from "./components/Counter";
import LifeCycles from "./components/LifeCycles";
import BindEvents from "./components/BindEvents";
import RenderingConditional from "./components/RenderingConditional";
import NameForm from "./components/NameForm";
import Refs from "./components/Refs";
import StyledComponents from "./components/styledComponents/StyledComponents.jsx";
import Header from "./components/Header";
import Hooks from "./components/Hooks/Hooks";

const Router = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/counter" component={Counter} exact />
      <Route path="/lifecycles" component={LifeCycles} exact />
      <Route path="/bindevents/:id?" component={BindEvents} exact />

      <Route
        path="/renderingconditional"
        component={RenderingConditional}
        exact
      />

      <Route path="/nameform" component={NameForm} exact />

      <Route path="/styledcomponents" component={StyledComponents} exact />

      <Route path="/refs" component={Refs} exact />

      <Route path="/hooks" component={Hooks} exact />

      <Route path="/" exact>
        <Redirect to="/nameform" />
      </Route>

      <Route path="*" component={() => <p>Error 404</p>} />
    </Switch>
  </BrowserRouter>
);

export default Router;
