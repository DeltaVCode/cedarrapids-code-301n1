import React from "react";
import { NavLink, Outlet } from "react-router-dom";

class HelpComponent extends React.Component {
  render() {
    return (
      <>
        <div className="help-page">
          <nav>
            <NavLink to="faq">View the FAQ</NavLink>
          </nav>

          <Outlet />
        </div>
      </>
    );
  }
}

export default HelpComponent;
