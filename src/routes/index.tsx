import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthDiscordCallback from '../pages/Discord/Callback';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Olá</h1>} />
      <Route path="/login/discord/callback" component={AuthDiscordCallback} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
