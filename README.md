# My Medicare Bot - React and Express

Coding challenge accomplished using React, Webpack and Express

### Prerequisites

You will need to have npm installed

You will need to have express installed globally

```
npm install -g express
```


### Installing

Clone the repository to your desired destination and then install all dependecies

```
cd MyMedicareBot
npm install
```

## Starting it up

The application is setup with Express at the highest directory. Inside of the client directory is all of the client related
items. I have already pre-built the production bundle of the React app. Express routes its public directory to 
client/dist which is where the webpack bundle is added to.

To start the server simply run

```
npm start
```

Then you can navigate to localhost:3000 in your browser to view the data

Make sure you are in the top level directory!

## Development

For development purposes you will need to have webpack-dev-server installed

```
npm install -g webpack-dev-server
```

Before you can make some changes you must install the React dependecies.

To install dev modules cd into the client directory

```
cd client
npm install
```

To build the application into the dist folder (for production)

```
cd client
npm run build
```

To run the development server

```
cd client
npm run dev
```

This will open up the webpack server on localhost:8080

Keep in mind that you will also need the express server running at the same time.
So in the highest directory run

```
npm start
```

If you want Express to know when you make changes you can use Nodemon instead

The great thing is webpack-dev-server will notice any changes an automatically update!

## Built With

* React
* Express
* Webpack
* Bootstrap (reacstrap)

## Authors

* **David Bartholomew** - *Initial work* - [barthinator](https://github.com/barthinator)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
