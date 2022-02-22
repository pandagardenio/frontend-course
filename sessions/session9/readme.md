# React Basics
In last session we have seen how we can create a React application, create custom React Components and use them in our React application.

Today we are going to see the especial prop **children**, how we can add **internal state** to our React Components, use **event handlers** in React components and how we can **execute asynchronous operations** (like fetching data from a web server) inside our Components

## Quick recap

In React we create components as functions and use them via JSX. To pass data to our components we use props, which are passed to the components in the same way we use HTML attributes.

**App.js**
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

**Band.js**

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

**BandMembers.js**

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

## children prop
Every React Component has a special key in its props argument called **children**. This key contains the content that is passed between the component start tag and the component end tag.

Let's see this with example1

## Event handling in React
In traditional js we handled events using addEventListener on an HTML reference we got using document.querySelector. As we have learnt, React does the DOM handling for us, so no need to use document.querySelector, and so we need to handle events in a different way.

In traditional js, to assign a listener for the click event of a button we do something like this:

```js
const button = document.querySelector('#my-button-id');
button.addEventListener('click', eventHandlerFunction);
```

In react we do it directly on the button element

```js
function myComponent(){
	const handleClick = () => {
		alert('Click happened');
	};

	return (
		<button onClick={handleClick}>My button</button>
	);
}
```

## Handling internal state

So far, we have seen how to pass data to our components as props. But sometimes we need to give our components the ability to save internal state.
For this, we use the following React function **useState**
```js
  const [count, setCount] = useState(0);
```

### What's happening here?

We call useState with the initial state we want to set (0 in this case). This function returns as a an array with two elements. The **first one** is the **value of the state** and the **second one** is a **function to update the state**.

We are going to see this in an example where we are going to implement a counter app along with event handling.


Let's see this with example2

## Executing asynchronous operations
Everything we render in our React components mut be synchronous. React provides a mechanism to execute asynchronous operations in our components. via the **useEffect** function. This function accepts a function to execute as first argument, and an array as the second argument.

### useEffect second argument behaviour

#### passing no second argument
By default, if we don't specify the second argument, the function we pass as the first argument will be executed every time our component is rendered (every time the props or the state of the component are changed).

#### passing an empty array
If we pass an empty array, our function will only execute the first time the component is rendered

#### passing an array with variables
If we pass an array with variable names used inside our function, it will be executed everytime there is a change on some of those variables. Kinda of like watching for changes and re executing the function when there is a change.

Let's see this in example3 and jump right into doing an exercise

## Let's practice

We are going to recreate our contact list app in React (example3 that we have just seen can give you a hint of what we are going to do)

1. Let's create a new React app
```bash
npx create-react-app contact-list
```

2. The first thing we are going to do is make the basic structure of our App. Open the file App.js and let's start with our basic HTML
3. Inside our App component (inside the parenthesis in the return) we are going to create the following HTML structure
### main container
Create a **div** tag with class name **main** that wil wrap the rest of the HTML we are creating

### header container
Create a **div** tag with class name **header**. Inside, we want an **h1** tag with class name **header__title** and text **My contact List**

### contact list container
Create a **div** tag with class name **contact-list**

### contact details container
Create a **div** tag with class name **contact-details**

### footer container
Create a **div** tag with class name **footer**

Your App.js file should look like this
```js
import  './App.css';

function  App() {
	return (
		<div  className="main">
			<div className="header">
				<h1 className="header__title">My contact list</h1>
			</div>
			<div className="contact-list"></div>
			<div className="contact-details"></div>
			<div className="footer">
				Made with ❤ in Madrid
			</div>
		</div>
	);
}

export  default  App;
```

4. Now we are going to add some basic styles in our css. Remember, the layout we want to achieve is this one (similar to what we did in session7).
![Layout](../assets/layout.png)

5. Open App.css and remove everything in that file. The first thing we are going to do is setup some basic styles

### Remove body margins
By default, the body of an HTML document has some margins, we are goint to remove them
```css
body {
	margin: 0;
}
```

### Change box-sizing for all elements
As we saw in session7, is easier for us to change the box-sizing of the elements in order to make our layout work, so we are going to change it for all of our elements.
```css
body *{
	box-sizing: border-box;
}
```

### main container styles
We want our main container to be horizontally centered and to have display flex in order for us to be able to achieve the desired layout. As some of our elements are going to take the 100% of the width, we also need to indicate that we want them to wrap using flex-wrap
```css
.main{
	max-width: 1024px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
}
```

### header container styles
We are going to apply some padding to our header and remove the margins from our title, as weel as some background color to the header. We also want our header to take 100% of the width available.
```css
.header{
	padding: 32px;
	background-color: lightgray;
	width: 100%;
}

.header__title{
	margin: 0;
}
```

### contact-list container styles
We want our contact-list to have a width of 250px and a border of 1px with solid style and black color

### contact-details container styles
We want our contact-details to have a padding of 32px, a border of 1px with solid style and black , a minimun width of 400px and be aligned to the right (you can achieve this playing with the margin-left property for example)

### footer styles
We want our footer to have a black background color, the content color is going to be white, the text is going to be aligned to the right (you can achieve this using the text-align property), a padding of 32px and to take the 100% of the width.

With this, we have our basic layout set. Now let's start doing components for the two main parts of our contact list app, the contact list itself and the contact details

## Contact List Component
We want to create a component called ContactList which does the following things:

 1. Create a new folder name components and inside create a file ContactList.js
 2. Render the following HTML

```html
<div  className="contact-list">
	<ul  className="contact-list__items">
	</ul>
</div>
```
3. Using useEffect, useState, and fetch, call our web server (the url is **https://mscbt-luis-grande.herokuapp.com/session7/contacts**) to fetch the list of contacts, save them in the internal state of the component and then render them inside the ul in the HTML.

### Calling our web server
As we know, fetch is an asynchronous command, so in order to be able to use it inside a React component we need to put it inside useEffect.
Once we get the response back from our server, we are going to extract the json and set it in the internal state (in order to that, we need to use useState at the beginning of the component). So far our component should look like this:
```js
import { useState, useEffect } from  'react';

function  ContactList() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts')
			.then(response  =>  response.json())
			.then(contacts  =>  setContacts(contacts));
	}, []);

	return (
		<div  className="contact-list">
			<ul  className="contact-list__items">
			</ul>
		</div>
	)
}

export  default  ContactList;
```

We are passing an empty array to the useEffect function, because we only want to fetch the list when the component loads.

Now that we have our contacts fetched from the server and saved into the internal state of the component, we can go ahead and render them inside the ul tag.

### Rendering the contacts
We are going to loop over the contacts array that we got as a response from the server (remember, as we are going to render HTML in react we are going to use the map function in React) and for each contact we are going to render a **li** tag with userName of the contact inside it. We are going to set the class name of that li tag to contact-list__item.

Our component should look like this
```js
import { useState, useEffect } from  'react';

function  ContactList() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts')
			.then(response  =>  response.json())
			.then(contacts  =>  setContacts(contacts));
	}, []);

	return (
		<div  className="contact-list">
			<ul  className="contact-list__items">
				{contacts.map(contact  => {
					return (
						<li  className="contact-list__item">
							{contact.userName}
						</li>
					);
				})}
			</ul>
		</div>
	)
}

export  default  ContactList;
```

With this, our ContactList component is ready.

Now, open App.js, import the ContactList component and replace the div with contact-list class name and use our ContactList.
Your App.js file should look like this.

```js
import  ContactList  from  './components/ContactList';
import  './App.css';

function  App() {
	return (
		<div className="main">
			<div className="header">
				<h1 className="header__title">My contact list</h1>
			</div>
			<ContactList/>
			<div className="contact-details"></div>
			<div className="footer">
				Made with ❤ in Madrid
			</div>
		</div>
	);
}

export  default  App;
```

## Contact Details Component
We want to create a component called ContactDetails which does the following things:

1. It should receive a contactName via props
2. It should render the following HTML

```html
<div className="contact-details">
</div>
```

3. Using useEffect, useState, and fetch, call our web server (the url is **https://mscbt-luis-grande.herokuapp.com/session7/contacts/${contactName}**) to fetch the contact details, save them in the internal state of the component and then render them inside the div in the HTML. We need to take into account, that in this case we want the fetch code in useEffect to be executed every time the prop contactName changes. As there are cases where contactName can be empty, we need to avoid calling our webserver in those cases (we can do that using an if statement)

### Calling our web server
Call the web server inside the useEffect function using fetch and set the contactDetails we get as response from the web server in the internal state of the component.
```js
import { useEffect, useState } from  'react';

function  ContactDetails(props) {
	const [contactDetails, setContactDetails] = useState(null);
	useEffect(() => {
		if (props.contactName) {
			fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts/' + props.contactName)
				.then(response  =>  response.json())
				.then(data  => {
					setContactDetails(data);
				})
		}
	}, [props.contactName]);

	return (
		<div  className="contact-details"  id="contact-details">
		</div>
	);
}

export  default  ContactDetails;
```

Pay attention to the second argument of useEffect, we are passing an array with the contactName  we get from the props so it executes the fetch from the web server every time the contactName fails.

### Rendering the contact details

As we can see in the initialization of the state, the contactDetails is initialized with null value. This means that there are going to be times where we have no contact details, so we need to take into account that and set some content for the case where we are not going to have contactDetails.
For this, we are going to create another React component inside the same ContactDetails file that is going to be used to render the contact details.

 1. Above the ContactDetails function, create another function ContactDetailsInfo which is going to recieve props as argument
 2. Inside that component we are going to use an if statement to render different things wheather we have contactDetails passed as prop or not.
 3. In case we have no contactDetails, we are going to render a **p** tag with the text **Click on a contact name to show contact details**
 4. In case we have contactDetails, we are going to loop over the contactDetails (remember, as it is an object we are going to have to use first Object.keys and then a map function) and generate an **h3** tag for each of the keys in contactDetails and a **p** tag with the content.
 5. Then, we are going to use that ContactDetailsInfo inside our ContactDetails component.

Our ContactDetails.js should look like this:
```js
import { useEffect, useState } from  'react';

function  ContactDetailsInfo(props) {
	if (props.contactDetails) {
		return  Object.keys(props.contactDetails).map(contactKey  => {
			return (
				<div>
					<h3>{contactKey}</h3>
					<p>{props.contactDetails[contactKey]}</p>
				</div>
			);
		});
	} else {
		return (
			<p>Click on a contact name to show contact details</p>
		);
	}
}

function  ContactDetails(props) {
	const [contactDetails, setContactDetails] = useState(null);

	useEffect(() => {
		if (props.contactName) {
			fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts/' + props.contactName)
				.then(response  =>  response.json())
				.then(data  => {
					setContactDetails(data);
				})
		}
	}, [props.contactName]);

	return (
		<div  className="contact-details">
			<ContactDetailsInfo  contactDetails={contactDetails}/>
		</div>
	);
}

export  default  ContactDetails;
```

With this, our ContactDetails component is ready.

Now, open App.js, import the ContactDetails component and replace the div with contact-details class name and use our ContactDetails.
For the moment we are going to hardcode the contactName so we can check the behaviour is correct.
Your App.js file should look like this.

```js
import  ContactDetails  from  './components/ContactDetails';
import  ContactList  from  './components/ContactList';
import  './App.css';

function  App() {
	return (
		<div className="main">
			<div className="header">
				<h1 className="header__title">My contact list</h1>
			</div>
			<ContactList/>
			<ContactDetails contactName="Luis Grande"/>
			<div className="footer">
				Made with ❤ in Madrid
			</div>
		</div>
	);
}

export  default  App;
```

## Rendering contact details when we click on contact in the contact list

In this part of the exercise we are going to learn how to pass the contact name that has been clicked in the ContactList Component to the App Component (the component using ContactList) and then propagate it to ContactDetails, so it can fetch the details for that contact.

### Adding the event handling to ContactList

 1. Open ContactList component in the code editor
 2. Let's create our event handler function in our component. We need a function that receives the contactName and propagates it. In order to achieve this behaviour, we are going to call a function that is passed to the component via props passing the contactName as argument of that function. It would be something like this.

```js
const  handleContactClick = (contactName) => {
	props.onContactClick(contactName)
};
```

 4. In each **li** element we are going to add an event handler for the click event (remember, in React we do that using onClick) with an anonymous function as handler which is going to call our event handler (in the example above it is called handleContactClick) passing it the userName of the contact.

At this point your ContactList component should look like this
```js
import { useState, useEffect } from  'react';
import  './ContactList.css';

function  ContactList(props) {
	const [contacts, setContacts] = useState([]);

	const  handleContactClick = (contactName) => {
		props.onContactClick(contactName)
	};

	useEffect(() => {
		fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts')
			.then(response  =>  response.json())
			.then(contacts  =>  setContacts(contacts));
	}, []);

	return (
		<div  className="contact-list">
			<ul  className="contact-list__items">
				{contacts.map(contact  => {
					return (
						<li  className="contact-list__item"  onClick={() =>  handleContactClick(contact.userName)}>
							{contact.userName}
						</li>
					);
				})}
			</ul>
		</div>
	)
}

export  default  ContactList;
```

### Getting the contactName in our App component, settting it in the state and passing it to the ContactDetails component
Now that our ContactList component is able to propagate the contactName of the contact that has been clicked, we are going to modify our App component to pass a function via props to the ContactList component which is going to set the contactName in the state and then we are going to pass the value of the state to our ContactDetails component

 1. Open App.js in the code editor
 2. Create an internal state with default value '' (empty string) using useState
 3. Create a function that is going to receive a contactName as argument and set it into the state.
 4. Pass the function we just created via props to our ContactList component (remember, the name of the prop is onContactClick)
 5. Remove the hardcoded value of the prop contactName in the ContactDetails component and use the value from the state

At this point, your App Component should look like this

```js
import { useState } from  'react';
import  './App.css';
import  ContactList  from  './components/ContactList';
import  ContactDetails  from  './components/ContactDetails';

function  App() {
	const [selectedContactName, setSelectedContactName] = useState('');

	const  handleOnContactClick = (contactName) => {
		setSelectedContactName(contactName);
	};

	return (
		<div  className="main">
			<div  className="header">
				<h1  className="header__title">My contact list</h1>
			</div>
			<ContactList  onContactClick={handleOnContactClick}/>
			<ContactDetails  contactName={selectedContactName}/>
			<div  className="footer">
				Made with ❤ in Madrid
			</div>
		</div>
	);
}

export  default  App;
```

### Close button for contact details
In this last part of the exercise we are going to implement a close button for our contact details.
The behaviour we want to achieve is the following:

 - Have no button when there is no contact details being shown
 - Have a button with an x on the top right corner of the contact details when there is content.
 - When we click in the close button, we are going to remove the selectedContactName in our App component, which is going to propagate that value to our ContactDetails component, which is going to render the default value for no content and hide the button

----------

 1. Open ContactDetails.js in the code editor
 2. Inside the div with contact-details class let's create a button with class contact-details__close
 3. Create a function inside the component that is going to call a prop called onClose
 4. Assign that function to the onClick event handler of the button we just created
 5. Modify the useEffect block, to add an else block, setting the state of contactDetails to null when no props.contactName
 6. In case contactDetails has a value, we are going to assign the class contact-details__close--visible
 7. Open App.js in the code editor
 8. Create a function which is going to set the state for selectedContactName to '' (empty string) and assign that function to the prop onClose of the ContactDetails component

 This is very similar to what we have done with our ContactList component. We are passing a function to our components from the parent component (App) so we can control the data from the parent.
 At this point, your ContactDetails.js and App.js should look like this:
```js
import { useEffect, useState } from  'react';
import  './ContactDetails.css';

function  ContactDetailsInfo(props) {
	if (props.contactDetails) {
		return  Object.keys(props.contactDetails).map(contactKey  => {
			return (
				<div>
					<h3>{contactKey}</h3>
					<p>{props.contactDetails[contactKey]}</p>
				</div>
			);
		});
	} else {
		return (
			<p>Click on a contact name to show contact details</p>
		);
	}
}

function  ContactDetails(props) {
	const [contactDetails, setContactDetails] = useState(null);

	const  handleOnClose = () => {
		props.onClose();
	};

	useEffect(() => {
		if (props.contactName) {
			fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts/' + props.contactName)
				.then(response  =>  response.json())
				.then(data  => {
					setContactDetails(data);
				})
		} else {
			setContactDetails(null);
		}
	}, [props.contactName]);

	let  closeButtonClass = 'contact-details__close';

	if (contactDetails) {
		closeButtonClass += ' contact-details__close--visible';
	}

	return (
		<div  className="contact-details">
			<button className={closeButtonClass} onClick={handleOnClose}>X</button>
			<ContactDetailsInfo  contactDetails={contactDetails}/>
		</div>
	);
}

export  default  ContactDetails;
```

```js
import { useState } from  'react';
import  './App.css';
import  ContactList  from  './components/ContactList';
import  ContactDetails  from  './components/ContactDetails';

function  App() {
	const [selectedContactName, setSelectedContactName] = useState('');

	const  handleOnContactClick = (contactName) => {
		setSelectedContactName(contactName);
	};

	const  handleOnContactDetailsClose = () => {
		setSelectedContactName('');
	};

	return (
		<div  className="main">
			<div  className="header">
				<h1  className="header__title">My contact list</h1>
			</div>
			<ContactList  onContactClick={handleOnContactClick}/>
			<ContactDetails onClose={handleOnContactDetailsClose} contactName={selectedContactName}/>
			<div  className="footer">
				Made with ❤ in Madrid
			</div>
		</div>
	);
}

export  default  App;
```

At this point the close button is showing at all times, that's because we have added no CSS.

 1. Open ContactDetails.css
 2. First create a selector for contact-details__close class and let's set the following properties
		 position: absolute;
		 top: 32px;
		 right: 32px;
		 display: none;
 3. Create another selector for contact-details__close--visible and set the following properties
		 displat: block;
 4. Last, we need to set the close button father's container position to relative, so the position absolute in the close button take that as a reference for positioning.
