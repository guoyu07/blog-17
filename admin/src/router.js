import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/App';

function RouterConfig({ history, app }) {
  const login = dynamic({
    app,
    component: () => import('./routes/Login'),
  });

  const routes = [{
    path: '/dashboard',
    component: dynamic({
      app,
      component: () => import('./routes/dashboard/DashBoard'),
    }),
  }, {
    path: '/article',
    component: dynamic({
      app,
      component: () => import('./routes/article/Article'),
    }),
  }, {
    path: '/article/write',
    component: dynamic({
      app,
      component: () => import('./routes/article/WriteArticle'),
    }),
  }, {
    path: '/article/draft',
    component: dynamic({
      app,
      component: () => import('./routes/article/Draft'),
    }),
  }, {
    path: '/article/trash',
    component: dynamic({
      app,
      component: () => import('./routes/article/Trash'),
    }),
  }, {
    path: '/article/view',
    component: dynamic({
      app,
      component: () => import('./routes/article/View'),
    }),
  }, {
    path: '/tag',
    component: dynamic({
      app,
      component: () => import('./routes/tag/Tag'),
    }),
  }, {
    path: '/catalog',
    component: dynamic({
      app,
      component: () => import('./routes/catalog/Catalog'),
    }),
  }, {
    path: '/system/menu',
    component: dynamic({
      app,
      component: () => import('./routes/system/Menu'),
    }),
  }, {
    path: '/system/config',
    component: dynamic({
      app,
      component: () => import('./routes/system/Config'),
    }),
  }];

  return (
    <Router history={history}>
      <div style={{ height: '100%' }}>
        <Switch>
          <Route
            path="/:name" component={props => (
              <App {...props}>
                <Switch>
                  {
                    routes.map((route, i) => (
                      <Route
                        key={i}
                        exact
                        path={route.path}
                        component={route.component}
                      />
                    ))
                  }
                </Switch>
              </App>
            )}
          />
          <Route exact path="/" component={login} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
