import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('home sweet home');
  }
  render() {
    return <div className="home">
        Home sweet home
      </div>;
  }
}
