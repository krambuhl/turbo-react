import Button from './button';

class ButtonLink extends React.Component {
  static propTypes = {
    mod: React.PropTypes.string,
    href: React.PropTypes.string
  };

  render() {
    return (
      <Button tagName="a" mod="link" href={this.props.href}>
      	{this.props.children}
      </Button>
    );
  }
}

export default ButtonLink;