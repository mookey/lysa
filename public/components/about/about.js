import React from 'react';

export class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var classes = 'about';
    return <div className={classes}>
        About
      </div>;
  }
}
export {About};
