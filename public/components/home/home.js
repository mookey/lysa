import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    var classes = 'home';
    return <div className={classes}>
        Home sweet home
      </div>;
  }
}

export {Home};
