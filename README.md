# simple-google-drive-site

## Check it out

Web view: https://desolate-harbor-65539.herokuapp.com/
 
Google Doc: https://docs.google.com/spreadsheets/d/1Y8jxsyXhUJLUKLDiw8SMpKiFGggMj-o2BxYq-wzAvSQ/edit#gid=0

To edit the Google Doc, please contact Rose for permission.

## Getting Started

1. Go to {host url}/token to grab a token that will be used for authorizing your publish calls from Google Docs
2. Install Google Drive as CMS: https://www.drivecms.xyz/
3. In your new Google Drive spreadsheet, click on the "Settings" tab, and edit the following fields:
    * endpoint: set to host url
    * authorization: the token from step 1.
4. You should be all set.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
