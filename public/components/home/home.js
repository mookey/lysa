import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('home sweet home');
  }
  render() {
    var classes = 'home' + (!this.props.active ? ' inactive' : '');
    return <div className={classes}>
        Home sweet home
      </div>;
  }
}
// Home.propTypes = {
//   active: React.PropTypes.bool.isRequired
// };
export {Home};
