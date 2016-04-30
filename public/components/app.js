import React from 'react';
import { Link } from './ui/link/link';
import { Home } from './home/home';
import { About } from './about/about';
import { Blog } from './blog/blog';

export class App extends React.Component {
  render() {
    return <div>
      <ul role="nav">
        <li><Link link="/" name="Home" /></li>
        <li><Link link="/about" name="About" /></li>
        <li><Link link="/blog" name="Blog" /></li>
      </ul>
      <div class="main-container">
        <Home active={true} />
        <Blog active={false} />
        <About active={false} />
      </div>
    </div>;
  }
}
