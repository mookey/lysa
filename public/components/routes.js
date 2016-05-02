import React from 'react';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { BlogInfo } from './blog/blog_info';
import { Default } from './default';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export class Routes extends React.Component {
  render() {
    return <Router history={ appHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="about" component={ About } />
          <Route path="blog" component={ Blog } >
            <Route path="info" component={ BlogInfo } />
          </Route>
          <Route path="*" component={ Default } />
        </Route>
      </Router>;
  }
}
