import React from 'react';

class Button extends React.Component {
  static propTypes = {
    mod: React.PropTypes.string
  };

  render() {
    const mod = this.props.mod || "default";
    return (
      <button class="button button--{mod}">
        {this.props.children}
      </button>
    );
  }
}

export default Button;