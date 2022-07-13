import React, { Component } from "react";
import imatge from "../resources/svg-1.svg"

class NavItem extends Component {
  constructor(props) {
    super(props);
  }
  state = { nom: this.props.nom };
  render() {
    return (
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img
            class="h-12 w-12"
            src={imatge}
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">{this.state.nom}</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    );
  }
}

export default NavItem;
