# Routing in React
So far we have learnt how to use React and third party libraries to make better frontend apps, but we have not yet seen how we can enable our users to navigate.

In this exercise we are going to explore how we can do that using React.

For this exercise we will we using our graphics exercise that we did in the TIP session. You can find the repo here https://github.com/pandagardenio/graphics (solutions are in branch routing, https://github.com/pandagardenio/graphics/tree/routing)

## Meet React Router
In order to enable our user to navigate in our application, we are going to be using a third party library called react-router (https://reactrouter.com/). There are a lot of other libraries that can be used for routing, but this is one of the most used.

First we are going to install the dependency as always, we can find the instructions here (https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation). Make sure you have cd into the exercise folder (sessions/recap/exercises/routing) and run **npm install react-router-dom@6** and after that run **npm start** to start the react server.

We are going to be using the graphics exercise we did in the Term Integration Project session. We had some kind of fake navigation implemented there, to allow the main content to change when we clicked in the tabs in the side menu. What we were really doing was not allowing navigation, but showing or hidding content based on the active section. During this exercise we are going to change that and implement actual routing.

## Wrapping our app with the BrowserRouter component
First thing we are going to do is change our index.js file and wrap our App component there with a BrowserRouter component (https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)

At this point, your index.js file should look like this

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

With this, we have enabled our app to "understand" how to navigate.

## Defining routes

Next thing we need to do is define which are the routes we are going to be able to navigate and what is the content that is going to be rendered for each of this routes. To do this, what we are going to do is replace the AppContent component in App component with components from react-router.

We can find an example of how to do this in the documentation (https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)

As we can see in the docs, we are going to use two components from react-router, Routes and Route. The Routes component is going to wrap the different routes we are going to define and is responsible of matching the url with the corresponding routes. And the Route component is going to define which content is rendered for each route we define.

1. First let's put our Routes components in place.
2. Then, let's define the different routes. We have 5 different charts we are showing, so we are going to need to define one for each of the different graphics
3. With this, we can get rid of the AppContent component and we will be able to navigate using the browser bar (if you put http://localhost:3000/bar-chart for example).
At this point your App.js
```js
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import BarChart from './components/BarChart/BarChart';
import CalendarChart from './components/CalendarChart/CalendarChart';
import PieChart from './components/PieChart/PieChart';
import RadarChart from './components/RadarChart/RadarChart';
import RadialBarChart from './components/RadialBarChart/RadialBarChart';

function App() {
    const [activeSection, setActiveSection] = useState('Bar Chart');

    const handleOnSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <Dashboard section={activeSection} onSectionChange={handleOnSectionChange}>
            <Routes>
                <Route path="/bar-chart" element={<BarChart/>}/>
                <Route path="/pie-chart" element={<PieChart/>}/>
                <Route path="/radar-chart" element={<RadarChart/>}/>
                <Route path="/radial-bar-chart" element={<RadialBarChart/>}/>
                <Route path="/calendar-chart" element={<CalendarChart/>}/>
            </Routes>
        </Dashboard>
    );
}

export default App;
```

## Making our sidebar links navigation Links
Now that we have defined the routes and are working, we need to modify the links on the sidebar to make them trigger a navigation. react-router provides us with Link components that allow us to do exactly that.
1. Open  DashboardSidebarItem.js in the editor
2. We are going to wrap the content inside ListItemButton component with a Link component from react-route so we can allow the user to navigate to a different section (remember, we always need to import the third party library component at the top of our file).
3. Now we have a Link, but we need to pass that Link component the route we want to navigate to. We are going to do so with a prop called **to** (https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links).
4. Now we can see that we have the links but our styles in the sidebar are weird. One very cool thing about Material UI is that each of its components allow us to pass a component prop where we can specify which component we want to use as "root" of the element. In thix example, we are going to use this to modify the component that uses ListItemButton (by default a **div**) to use the Link component.
5. We are also going to remove the onClick handler we had defined in the ListItemButton component because now we have Links.
6. We also want to highlight which Link matches the active route, for that we are going to use more functionality provided by react-router. There is the useMatch function from react-router, which allow us to pass a route as parameter and returns wheather the passed route is the active one or not.

At this point, your DashboardSidebarItem should look like this:
```js
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link, useMatch } from "react-router-dom";

function DashboardSidebarItem(props) {
    const selected = useMatch(props.to);
    return (
        <ListItemButton selected={selected} component={Link} to={props.to}>
                <ListItemIcon>
                    {props.children}
                </ListItemIcon>
                <ListItemText primary={props.section} />
        </ListItemButton>
    )
}

export default DashboardSidebarItem;
```

1. Now, we need to slightly modify our DashboardSidebar.js file in order to pass the proper props to DashboardSidebarItem components. Basically, we can remove the onClick handler (we have removed it from DashboardSidebarItem) and the activeSection (we are calculating this with the useMatch function) props. And we need to pass the corresponding to prop in order to make all our links work. At this point, your DashboardSidebar file should look like this:

```js
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import DashboardSidebarItem from './DashboardSidebarItem';

import './DashboardSidebar.css';

function DashboardSidebar(props) {
    let dashboardSidebarClassName = 'dashboard-sidebar';
    if (props.open) {
        dashboardSidebarClassName += ' dashboard-sidebar--open';
    }

    return (
        <Drawer className={dashboardSidebarClassName} variant="permanent" open={props.open}>
            <Toolbar
                className="dashboard-sidebar__toolbar"
            >
                <IconButton onClick={props.toggleOpen}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <DashboardSidebarItem
                    section="Bar Chart"
                    to="/bar-chart"
                >
                    <DashboardIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Pie Chart"
                    to="/pie-chart"
                >
                    <ShoppingCartIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Radar Chart"
                    to="/radar-chart"
                >
                    <PeopleIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Radial Bar Chart"
                    to="/radial-bar-chart"
                >
                    <BarChartIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Calendar Chart"
                    to="/calendar-chart"
                >
                    <LayersIcon />
                </DashboardSidebarItem>
            </List>
        </Drawer>
    )
}

export default DashboardSidebar;
```
