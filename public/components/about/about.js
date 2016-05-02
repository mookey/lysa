import React from 'react';

export class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var classes = 'about' + (!this.props.active ? ' inactive' : '');
    return <div className={classes}>
        About
      </div>;
  }
}
// About.propTypes = {
//   active: React.PropTypes.bool.isRequired
// };
export {About};
