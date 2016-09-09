import Button from './button';

class ButtonCta extends React.Component {
  render() {
    return (
      <Button mod="cta">
      	{this.props.children}
      </Button>
    );
  }
}

export default ButtonCta;