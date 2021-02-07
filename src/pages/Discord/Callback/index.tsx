/* eslint-disable no-console */
import React, { useEffect } from 'react';
import axios from 'axios';

const AuthDiscordCallback: React.FC = () => {
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;

    // const client_id = '804473319826522112';
    // const client_secret = 'LRer0rWSnokdk3BOTtBd25x-bre7WGRB';
    // const grant_type = 'authorization_code';
    const code = params.get('code') ?? '';
    // const redirect_uri = encodeURIComponent('http://localhost:3000/dashboard');
    // const scope = 'identify email';

    // console.log({
    //   client_id,
    //   client_secret,
    //   grant_type,
    //   code,
    //   redirect_uri,
    //   scope,
    // });

    // const data = new URLSearchParams();
    // data.append('grant_type', grant_type);
    // data.append('code', code);
    // data.append('redirect_uri', encodeURIComponent(redirect_uri));

    // const creds = btoa(`${client_id}:${client_secret}`);

    axios
      .get('http://localhost:3333/callback', {
        params: {
          code,
        },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err.response.data);
      });
  }, []);

  return <h1>DiscordCallback</h1>;
};

export default AuthDiscordCallback;
