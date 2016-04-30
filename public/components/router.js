import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { BlogInfo } from './blog/blog_info';
import { Default } from './default';

export class Routes extends React.Component {
  render() {
    return <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="blog" component={Blog}>
            <Route path="info" component={BlogInfo}/>
          </Route>
          <Route path="*" component={Default}/>
        </Route>
      </Router>;
  }
}
