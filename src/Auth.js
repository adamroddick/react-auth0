import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'adamroddick.au.auth0.com',
    clientID: '5HneCLQFG4CUDywZn5MZIWKb14Jdp2tg',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}