
# React

A Javascript library for building user interfaces



## Components

React interfaces are based in components. What is a component? A component is a unit of functionality in the UI.

##

Components are pieces of the UI that may take user input and store some internal state.

##

Components in React are javascript functions returning JSX code.

JSX code is like a pseudo HTML language (you can see in this example is very similar to HTML) that will compile later to HTML.

##

```js
function  MyComponent(props) {
    return (
        <div  id={props.id}  className="my-component">
            {props.content}
        </div>;
    );
}
```



### JSX

React uses a special extension to JavaScript called JSX. It allows us to _embed_ HTML inside JS.

```js
<div  id={props.id}  className="line">
    {props.content}
</div>;
```

we can use JS expressions inside JSX code by putting them between brackets (`{}`).



### props in React Components

In order to pass data to our React components, each Component accepts a props object where we can pass data to the Component which can later use it.



### Instantiating components

Once we have declared a component in React, we can instantiate it as if it was a new HTML tag!

```js

<MyComponent  id="component-1"  content="This is the content of my first React component"/>

```

As we can see, we pass properties to components as if they were HTML attributes.



## Let's see example1

Go to the examples/example1 folder inside session8 in your terminal and run the following commands

```bash

npm install

npm start

```

What's going on here?

### npm

npm is a package manager to handle javascript applications. When we are programming with React, we need to handle third party dependencies (like React itself) as well as compile the code in order to generate HTML, javascript and CSS that the browser can understand. npm allow us to do all that.

With **npm install** we are installing those third party dependencies and with **npm start** we are starting a React web server (the command is defined in the package.json file in the folder.



## Let's practice



### Creating our first React app

As we have mentioned before, there are a lot of things happening under the hood with a React app. That's why the creators of React created an app generator that will assist us on handling all those things.

To create a new react app, run the following command in your terminal.

```bash

npx create-react-app bands

```



A lot of things have happened here, let's go over it

- A new folder has been created with contact-list as name

- If we open that folder we can see that a new git repository has been initialized

- Inside that folder there are a lot of files:
- **node_modules**: here is where all the third part libraries needed to make our **React** app compile and work have been installed
- **public**: static files for our app. The most important one is the **index.html**, when our **React** app is compiled, this is the file that will be served to the web browser.
- **src**: here is where the code for our **React** app lives. **Usually, this is the only folder that we will modify.**
- **.gitignore**: this is a special file used by **git** to hint **git** that some files should not be included in the repository
- **package-lock.json**: this is a file that **npm** uses with the resolved versions of the third party libraries installed
- **package.json**: this is a file that **npm** uses to configure the javascript project. It also defines some commands in order to start our React app locally or build (compile) our React app

If you enter the folder in your terminal and run the following command
```bash
npm start
```
A react server will be started with your app
Every time you make a change in some file in your src folder, the browser will reload automatically showing your changes.

### Let's recreate our bands app from session3 in React
We will be modifying the files *App.js* and *App.css* files for this.
Open App.js in the code editor and let's start

 1.  Copy the variable bands from the bands.js file in session3/exercises folder (line 3 to 22) and paste it in App.js
 2. We want to do the same as we did in the bands exercise, loop over the bands variable and for each band create a **div** container.
 3. Inside each div container, we want to render a **h2** with the name of the band.
 4. For each band member, we want to render a **p** with the name of the band member and with class (in React we use the attribute *className*) with the instrument he plays.

 - If we use forEach for the loops, we are going to see nothing in the screen and an error in the console saying that we returned nothing from our App component. What has happened here?
 - In our original bands exercises we were using forEach because we ere manipulating the DOM directly using document.createElement and document.querySelector.
 - In React, we need to return the elements we are creating, that's the reason why we need to use map instead of forEach. When we use forEach to iterate an array, it returns nothing (undefined in javascript, similar to None in Python). When we use map, we are returning an array, that React is able to interpret.
 - As we can see, with React we don't have to manipulate the DOM ourselves, React handles that by itself, so no need to use functions like document.createElement or document.querySelector.

5. Open App.css in the code editor and add the following a selector for the ***voice*** class selector and set color of your choice

With this we have recreated our bands exercise in React, but the code is kinda messy, let's create a Band React Component and refactor our code

 1. Inside the src folder, create a components folder
 2. Inside the components folder, create two files Band.js and Band.css
 3. Open Band.js and create a function called Band which will accept props as argument
 4. At the end of the file, write the following
 ```js
 export default Band
 ```
 5. We are going to move the code for the Band html in App.js to our Band component
 6. Copy everything inside the map function in App.js and return it inside the Band function in Band.js

Your code in Band.js should look like this
```js
function  Band(props) {
	const  name = band.name;

	return (
		<div>
			<h2>{name}</h2>
			{Object.keys(band.instruments).map(member  => {
				const  instrument = band.instruments[member];
				return (
					<p  className={instrument}>{member}</p>
				)
			})}
		</div>
	)
}
export  default  Band;
```
7. As we have mentioned before, the way React allow us to pass data to our component is via the props argument, so let's modify our code to take the band properties from our props.
8. Change band.name to props.name and band.instruments to props.instruments
9. At the top of the file, import your Band.css file
```js
import './Band.css';
```

This is how your Band.js should look like at this point
```js
import  './Band.css';

function  Band(props) {
	const  name = props.name;

	return (
		<div>
			<h2>{name}</h2>
			{Object.keys(props.instruments).map(member  => {
				const  instrument = props.instruments[member];
				return (
					<p  className={instrument}>{member}</p>
				)
			})}
		</div>
	)
}

export  default  Band;
```
With this, we have created our Band component. Now let's modify our App.js file in order to import our Band component and use it.

10. Open App.js in the code editor
11. What we are going to do is in our map function where we are looping over our bands, we are going to render our Band component for each entry in the bands variable.
12. First, we need to import our Band component in order to be able to use it. On the top of the file

```js
import Band from './components/Band'
```

13. Now that we have our Band component imported, we can use it. What we want is in each iteration of our map function, return a Band component passing the name of the band and the instruments of the band as props to the component. Remember, in React we pass props to a component like if we were setting HTML attributes.

```js
function  App() {
	return  bands.map(band  => {
		return (
			<Band  name={band.name}  instruments={band.instruments}/>
		)
	});
}
```

14. As we are already importing the css in the Band.js file, we can go ahead and remove the import in App.js
15. At this point, our App.js file should look like this

```js
import  Band  from  './components/Band';

const  bands = [
	{
		name:  "The Beatles",
		instruments: {
			John:  "voice",
			Paul:  "bass",
			Ringo:  "drums",
			George:  "guitar"
		}
	},
	{
		name:  "The Ramones",
		instruments: {
			Johnny:  "voice",
			Joey:  "guitar",
			Marky:  "drums",
			DeeDee:  "bass"
		}
	}
];

function  App() {
	return  bands.map(band  => {
		return (
			<Band  name={band.name}  instruments={band.instruments}/>
		)
	});
}

export  default  App;
```

Let's "componentize" a bit more our code. Our Band.js still looks kinda of messy, lets create another component for each member of the. band.

1. Inside the components folder, create a new file called BandMembers.js.
2. What we are going to do, is refactor our Band Component and move the part where we are rendering the band members to its own component. Open BandMembers.js and create a new React component and export it.

```js
function  BandMembers(props) {
}

export  default  BandMembers;
```

4. Let's move the code where we are creating the band members to our BandMembers component (the code where we are executing map over the instruments). At this point, our BandMembers.js file should look like this

```js
function  BandMembers(props) {
	return  Object.keys(props.instruments).map(member  => {
		const  instrument = props.instruments[member];
		return (
			<p  className={instrument}>{member}</p>
		)
	})
}

export  default  BandMembers;
```

5. With this we have our BandMembers component ready. Now, let's head back to our Band file and use it. First import the BandMembers component and the use it to render the band members. The code in Band.js file at this point should look like this

```js
import  './Band.css';
import  BandMembers  from  './BandMembers';

function  Band(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<BandMembers  instruments={props.instruments}/>
		</div>
	)
}

export  default  Band;
```
