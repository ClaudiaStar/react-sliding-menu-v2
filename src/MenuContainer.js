import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component {
constructor(props) {
  super(props);

  this.state = {
    visible: false
  };

  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);

}

  //The event handler for clicks
  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  //The function that toggles menu for use in event handler
  toggleMenu() {
    this.setState ({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <React.Fragment>

      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible} />
      <div>
        <div>
        <h2>Sliding menu using react.js!</h2>
        <p>Hint: Click on the circle.</p>
        </div>
      </div>

      </React.Fragment>
    );
  }
}

export default MenuContainer;
