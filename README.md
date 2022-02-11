# heroku-deployment-walkthrough

Create a Heroku account
brew tap heroku/brew && brew install heroku to install the heroku CLI
In index.js/server.js, refactor to const PORT = process.env.PORT
In .env , create PORT=8000 . It can be any local port, but PORT will later be used as a configuration variable on Heroku.
npm i cors
Within index.js/server.js:
Add const cors = require('cors')
Add app.use(cors()) :warning: MAKE SURE THIS IS ADDED AFTER const app = express() :warning: This is important so that front-end applications can make requests to our API successfully!
In VS Code: create a file named Procfile in the root directory of your API. Make sure Procfile has a captialized P
Inside Procfile, include a line of code -> web: node index.js or web: node server.js, whichever .js file you have
Commit and push to GH
heroku create
git push heroku main
 Navigate to your Heroku repo -> Overview -> Dyno Information and confirm that web node index.js is ON. This confirms we have a dyno ready to handle our web processes!
Within your Heroku repo -> go to Settings -> Reveal config vars -> Add -> Include:
Your MONGODB_URI and give the value of your Atlas cloud connection
The PORT as indicated in your .env and set the value to the deploy link for your Heroku repo. From my example, it would look like PORT and https://warm-peak-90606.herokuapp.com/. You can get this link by clicking open app from within your Heroku repo. Doing this gives a way for front-end applications to request from a url. In this case, a GET request would be fetch("https://warm-peak-90606.herokuapp.com/"). After this step is complete, you should be able to test within Postman!
