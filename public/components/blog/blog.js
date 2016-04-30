import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('fucker did mount');
  }
  render() {
    var classes = 'blog' + (this.props.active ? ' active' : '');
    return <div className={classes}>
        Blog
      </div>;
  }
}
Blog.propTypes = {
  active: React.PropTypes.bool.isRequired
};
export {Blog};
