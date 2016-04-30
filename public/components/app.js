import React from 'react';
import { Link } from 'react-router';

export class App extends React.Component {
  render() {
    return <div>
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      {this.props.children}
    </div>;
  }
}
