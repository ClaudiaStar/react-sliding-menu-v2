import React, {Component} from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility= "show";
    }

    return (
      <div id="flyoutMenu"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}>

        <div className="menuItems">
      {/* eslint-disable-next-line */}
        <h2><a href="#">Home</a></h2>
        {/* eslint-disable-next-line */}
        <h2><a href="#">About</a></h2>
        {/* eslint-disable-next-line */}
        <h2><a href="#">Contact</a></h2>
        {/* eslint-disable-next-line */}
        <h2><a href="#">Search</a></h2>
        </div>
      </div>
    );
  }
}

export default Menu;
