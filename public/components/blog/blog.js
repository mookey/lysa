import React from 'react';
import { Link } from 'react-router';

export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('fucker did mount');
  }
  render() {
    return <div className="blog">
        Blog
        <Link to="/blog/info">Blog info</Link>
        {this.props.children}
      </div>;
  }
}
