import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    var classes = 'blog';
    return <div className={classes}>
        Blog
      </div>;
  }
}
export {Blog};
