# Rendering graphics in React
Today we are going to learn how to add third party libraries to our React apps and how to use https://nivo.rocks/ to render graphics using React.

## Installing third party libraries
In order to be able to use third party libraries in our React apps we first need to install them. Remember that package.json file we see in all of our React apps? That's the place where dependencies are defined. It looks like this
```json
{
  "name": "contact-list",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
Apart from dependencies, this file is used for other porpouses, for example when we run **npm start** we are executing the script defined as start in this file.
Instead of writing the dependencies ourselves, we have **npm** to help us manage the dependencies. Normally we are using **npm install** to install all the dependencies in our app, to install a new dependency we are going to use **npm install --save THIRDY_PARTY_LIBRARY_NAME**.
Usually, third party libraries are shipped in two different ways. One way is shipping the whole library as one package, in this case we will only have to install one library and the other way is shipping a core package and then individual packages for each of the different components of the library.
In the case of nivo, they are using the latter one. So first, we need to install the core package and then each of the different graphic components we want to use. **npm install --save @nivo/core @nivo/bar @nivo/calendar @nivo/pie @nivo/radar @nivo/radial-bar**. This will install the core package, along with the different graphic components we are going to use.

Let's go to our exercise folder in **sessions/tip/exercise** and let's start

## Exercise

 1. First let's run **npm install** to install the dependencies of the project (at this point React)
 2. Let's install nivo core along with the chart components we will be exploring in this session **npm install --save @nivo/core @nivo/bar @nivo/calendar @nivo/pie @nivo/radar @nivo/radial-bar**
 3. Let's check a little bit the boilerplate code of the exercise

### nivo charts
For this exercise we will exploring the following the following charts nivo provide us
- https://nivo.rocks/bar/
- https://nivo.rocks/calendar/
- https://nivo.rocks/pie/
- https://nivo.rocks/radar/
- https://nivo.rocks/radial-bar/


## Deploying our app
We are goin to see two different methods for deploying our app.

### Netlify
Netlify is a platform that allow us to deploy frontend apps in a very easy way. It connects to our GitHub account and allow us to deploy everytime we push something to our main/master branch (along with a lot of other things).

1. Let's create a new GitHub repo in our account
2. In your machine, create a new react app using npx create-react-app (create the app outside the frontend-course folder)
3. Run the commands specified in GitHub afet the repo creation for an existing GitHub repository to upload your example React App to GitHub
4. Open https://www.netlify.com/ in a web browser
5. Let's sign up using GitHub
6. Click on add new site and select the GitHub Repository you want to connect with Netlify (the repo we just created)
7. As we are using create-react-app, there's no need to change any setting
8. Wait until the website is published and navigate to the URL provided by Netlify. Your app is now live :)

#### Changing your netlify site name
If you click on your site and go to site settings, we can change our site name to get something more human readable

#### Updating our site
Now that our Netlify site is connected with the GitHub repo, updating it is as simple as making a new commit and pushing it into GitHub. Netlify will be automatically notified and re deploy our app.

#### Using environment variables
We are going to learn how to use environment variables. Environment variables allow us to change some configuration values in our APP depending on wheather we are in our local machine working or in our production environment. This is very useful when we are using fetch for example. In local, we are going to fetch the data from a server in our local machine (Your Python API working in local for example), while in production we are going to want to fetch data from the production server of our Python API.

The easiest way to do this is doing the following:

1. Go to your Netlify site,  Site settings > Build & deploy > Environment > Environment variables and create a new environment variable with name REACT_APP_API_URL and value https://mscbt-luis-grande.herokuapp.com (Where https://mscbt-luis-grande.herokuapp.com should be the url where your Python API is deployed for the Term Integration Project)
2. Now, inside your src folder create a file **config.js**
3. Put the following inside

```js
const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3100'
};

export default config;
```

What we are doing here? We are creating a javascript object with one key **apiUrl** and assigning to that key the value of the environment variable or a default value in case the environment value is not set.

With this, what we are going to achieve is to get the value from the environment variable in our production environment and localhost in the port 3100 in our local machine (the local url can be different in your machine, so you would probably need to adjust it).

6. Now, just to check if it works let's print the value in our App.js component. Open App.js in your editor and write the following at the top of the file

```js
import config from './config';
```

And the following inside the JSX of the component

```js
<p>{config.apiUrl}</p>
```
7. Let's create a new commit, push it to our GitHub repo so it gets deplyoed to Netlify.
8. If you start your app locally, you should see http://localhost:3100 and if you go to the live url you should see https://mscbt-luis-grande.herokuapp.com

### GCP
In this video tutorial you can see how to deploy your react app to GCP using app engine
https://www.youtube.com/watch?v=pZggyJQKtlM&ab_channel=RethinkingUI
