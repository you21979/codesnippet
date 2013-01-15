var OAuth = require('oauth').OAuth;
var info = {
    consumer_key : '',
    consumer_secret : '',
};
var endpoint = {
    request_token : "https://api.twitter.com/oauth/request_token",
    access_token : "https://api.twitter.com/oauth/access_token",
    callback : "http://127.0.0.1:3000/auth/twitter/callback",
};
var oa = new OAuth(
    endpoint.request_token,
    endpoint.access_token,
    info.consumer_key,
    info.consumer_secret,
    "1.0",
    endpoint.callback,
    "HMAC-SHA1"
);
oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
    if (error) {
      console.log(error);
//      res.send("yeah no. didn't work.");
    } else {
      var oauth = {};
      oauth.token = oauth_token;
      console.log('oauth.token: ' + oauth.token);
      oauth.token_secret = oauth_token_secret;
      console.log('oauth.token_secret: ' + oauth.token_secret);
//      res.redirect('https://twitter.com/oauth/authenticate?oauth_token='+oauth_token);
    }
});
