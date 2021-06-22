import { Link, NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <NavLink to="/counter" activeClassName="is-active">
      Counter
    </NavLink>
    <NavLink to="/lifecycles" activeClassName="is-active">
      LifeCycles
    </NavLink>
    <NavLink to="/bindevents" activeClassName="is-active">
      BindEvents
    </NavLink>
    <NavLink to="/renderingconditional" activeClassName="is-active">
      RenderingConditional
    </NavLink>
    <NavLink to="/nameform" activeClassName="is-active">
      NameForm
    </NavLink>
    <NavLink to="/styledcomponents" activeClassName="is-active">
      StyledComponents
    </NavLink>
    <NavLink to="/refs" activeClassName="is-active">
      Refs
    </NavLink>
  </header>
);

export default Header;
