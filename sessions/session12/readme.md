# Session 12

During today's session we are going to deploy a React app to Netlify, add an environment variable to decide which API we want to fetch data from (that way we can use a local web server when we are developing and a production web server when our app is finished) and we are going to change our App to see how Netlify automatically deploys it.

## Setting up our repo in GitHub
As we've seen, Netlify connects with GitHub so we can easily deploy our React apps. First thing we are going to do is setting up a repository in our GitHub account. In this case, instead of creating a new repo we are going to fork an existing one (https://github.com/pandagardenio/mui-showcase). When we fork a Git repository in GitHub we are creating a copy of that repository in our GitHub account.

For this, we are going to navigate to https://github.com/pandagardenio/mui-showcase an click the fork button. After a few moments, we will be redirected to the repository copy in our GitHub account.

## Connecting Netlify with our GitHub Repository
Next, we are going to navigate to Netlify (https://www.netlify.com/) and we are going to log in using GitHub. Here we should arrive to the home page of our Netlify account, where we should see a list of your running sites and a button saying **Add new Site**(if you didn't complete this part during the tip session you are not going to see this list, you will be shown the next step directly). Click on **Add new Site** and **Import an existing project**.

You will see an screen which says **Connect to Git provider**, select **GitHub**, in case you have not already configured before Netlify on GitHub you should see a button saying **Configure Netlify on GitHub**, click on it an authorize Netlify to access repositories on your GitHub account. Once you have done it, you should see a list of repositories, look for the one you one to connect with Netlify (in this case it is going to be **mui-showcase**), click on it and press the button **Deploy site** without changing any of the settings.

With this, your React app is being deployed. Once the deploy is done, you will see a line in the section **Production deploys** with the tag Published. If you click to the URL on the top of the page, you will be redirected to your deployed app.

The URL is kinda weird, so we are going to put a custom name to make it easier to remember. For that, we are going to click on **Site settings** in the menu and in that section we are going to click the **Change site name** button. Names are shared across all Netlify apps and need to be unique, so take that into account.

## Using environment variables
Environment variables are variables which are specified outside our application but that we can use in our application. They exists in all programming languages, here we are going to see how we can use them in a React App. We are going to use this special type of variables to change which web server we are going to be fetching data from.

1. Go to your Netlify site,  Site settings > Build & deploy > Environment > Environment variables and create a new environment variable with name REACT_APP_API_URL and value https://mscbt-luis-grande.herokuapp.com
2. Now, inside your src folder create a file **config.js**
3. Put the following inside

```js
const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000'
};

export default config;
```

And then we are going to use it in our Album Component to create the url fetch has to use.
1. If you open Album.js (there are two files, for this matter it doesn't matter which one you open).
2. There we can see that we are import that config file, and using config.apiUrl inside our fetch function. That way, by default our application will use http://localhost:3000 when we are developing and the value provided in Netlify when it's deployed to the Internet.

## How MUI helps us
In the repository we have the app developed using Material UI and without it. We are going to see how Material UI helps us develop better and faster
