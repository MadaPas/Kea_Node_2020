# Scotch.io Intro to Node and Mongo

## 03-Express-Mongo

This example shows how to use Node with MongoDB and uses a remote mLab database connection. Conceptually, this step is the same as 01-Express, but rather than saving data in-memory, it is persisted to a database. 

The files and code for the API endpoints have been rearranged to take advantage of the Router middleware that comes with Express. This provides a way to separate out each endpoint into its own file and to be called from the main `server.js` script.

### Installation and Running the App

Make sure `nodemon` is installed globally:

```
npm install -g nodemon
```

Clone the repo, then:

```
npm run dev
```

The app will be served at `localhost:3000`.

## Scotch School

[Take the course on Scotch.io](#)