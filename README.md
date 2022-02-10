# Shorten the URL
## The Tech Stack

This project was built using the MERN (MongoDB, Express, React, and Node) stack.
It uses Tailwind for the Frontend CSS. The frontend was deployed via Netlify at
https://shorthentheurl.netlify.app/. The backend was deployed via Heroku at
https://s-url1.herokuapp.com/.

**Note**: Please try to wait a few seconds until the shortened URL appears. Since the backend is
deployed on the Heroku Free tier, it sometimes takes more than one try to activate/"wake"
the server.

More notes on deployment can be found under `Build A Local Instance` below.

## The Results
The primary (and sole) functionality of this application is that the a long URL can be converted to 
shortened version upon clicking "Enter." This is done primarily by using a pre-built package
called [`nanoid`](https://github.com/ai/nanoid/) to generate the codes for 
the new shortened urls. It has a relatively low probability of collisions and
was implemented in a single line of code. When the code is generated, it's appended
to the backend API's domain (i.e. https://s-url1.herokuapp.com/qJnIxt) and stored
in the database. When the user accessing this address, it redirects them to the 
long url link, which was implemented with Express. The remaining work was configuring
the React code for frontend to update the states of the long and short url sections.

## Testing
The frontend was tested manually, but there is in-built small test suite from "Create-React-App"
to validate it renders appropriately. This can be found in `client/SRC/App.test.js`.

The backend was tested manually. [Postman API](https://www.postman.com/) platform was used
for testing the POST and GET requests. You can find these tests [here](https://www.getpostman.com/collections/fbe0d5a07581c4e087d1).

## Build A Local Instance
### Frontend:
```
$ cd client
$ npm install
$ npm start
```
It should automatically open at `http://localhost:3000`.

One way to deploy the frontend is with [Netlify](https://www.netlify.com/).
You must use the following settings for this to work correctly.
```
Base directory: /client
Build command: npm run build
Publish directory: /client/build
```

### Backend:
```
$ cd server
$ npm install
$ npm start
```
You must set up your own MongoDB cluster, there's a free tier with
[MongoDB Atlas](https://www.mongodb.com/atlas). You must then create
a `.env` and insert your credentials. You can refer to the `server/index.js`
then `process.env.` to find these variables.

To deploy the server, you can use [Heroku](https://www.heroku.com/). You must
configure the "Config Vars" (same as the `.env` vars) accordingly for this build 
to be successfully. When you deploy, I recommend using the Heroku CLI, but at the
final step, run `git subtree push --prefix server heroku master` rather than 
the typical `git push heroku master`.

This project was built starting with the following [template](https://github.com/brandonv98/MERN-Stack-Template).
