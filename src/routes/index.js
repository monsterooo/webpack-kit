const rootRoute = {
  childRoutes: [
    {
      path: '/',
      component: require('../app/App'),
      childRoutes: [
        {
          path: 'reddit',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('../reddit/RedditContainer'));
            });
          }
        }
      ]
      //childRoutes End
    }
  ]
};

export default rootRoute;
