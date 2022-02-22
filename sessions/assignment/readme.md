# Group assignment

## Assignment data

### Forming the groups
This assignment is meant to be done in groups of 3-4 people

### Delivery
Please fork the repo MISSING_REPO_URL and commit all the changes to the main branch in your repo's fork. When finished, send the link to the repo via Slack/email.

### Due date
Please submit your assignment by Thursday the 10th of March

### Doubts
Plase submit any doubt you have using Slack or email. If you think your doubt can help others, please use the Slack group instead of private messages. I will try to answer as soon as possible.

## Assignment description
With this assignment we are going to practice everything we have learnt so far.
We are going to do a weather app.

### Assignment bootstrap app
You will be provided with the skeleton of a React app, with some already done components that you are going to be able to use.
TO BE EXPLAINED THE DIFFERENT COMPONENTS

### Assignment weather endpoints
You are also going to have available two endpoints in order to fetch weather data from an API.

#### Get cities endpoint
**Url:** https://mscbt-luis-grande.herokuapp.com/group-assignment/cities
**Description:** Returns an array of available cities where we can check the weather

#### Get weather for a city endpoint
**Url:** https://mscbt-luis-grande.herokuapp.com/group-assignment/weather/:city
**Description:** Returns an object representing the weather for the given city

##### location
In this field we have the latitude `lat` and the longitude `lng` for the city

##### timeZone
In this field we have the timeZone name `name` and the timeZone offset `offset` (**the number of seconds a certain time zone is ahead of or behind GMT**)

##### current

`time`: Date in miliseconds. You can use it in Javascript using new Date(time) to get a formatted date
`temperature`: Temperature in Farenheit degrees
`temperatureFeeling`: The "feels like" temperature is **a measurement of how hot or cold it really feels like outside** in Farenheit degrees
`humidity`: Humidity %
`uvi`: The UVI gives an **indication of the level of UV radiation and the potential danger of sun exposure**
![UV index](https://www.who.int/images/default-source/imported/radiation/uv-ultraviolet-index.jpg?sfvrsn=8cd288e_5)
`cloudiness`: Cloudiness %
`windSpeed`: Wind speed in m/s
`summary`: Summary of the weather

##### hourly[]
`time`: Date in miliseconds. You can use it in Javascript using new Date(time) to get a formatted date
`temperature`: Temperature in Farenheit degrees
`temperatureFeeling`: The "feels like" temperature is **a measurement of how hot or cold it really feels like outside** in Farenheit degrees
`humidity`: Humidity %
`uvi`: The UVI gives an **indication of the level of UV radiation and the potential danger of sun exposure**
![UV index](https://www.who.int/images/default-source/imported/radiation/uv-ultraviolet-index.jpg?sfvrsn=8cd288e_5)
`cloudiness`: Cloudiness %
`windSpeed`: Wind speed in m/s
`summary`: Summary of the weather

##### daily[]
TO BE EXPLAINED

## Assignment grading
The grade of the assignment is going to based in four different levels of complexity

### First level
We need to make an app that calls the endpoint to get the weather for a city we choose from the available ones using fetch and shows the user the current temperature, the "feels like" temperature and an image representing the summary of the weather

### Second level
We are going to improve the app we made in the first level and instead of showing the temperature for the city we choose, we are going to give our user the ability to select the user.
For that, we are going to call the endpoint to get the available cities, render a series of tabs that our user is going to be able to click and when one of those tabs are clicked we are going to show the same weather data we are showing in the first part for the selected city.

### Third level

We are going to improve the app we made in the second level and also show the weather information in an hourly format. For this, we can use the hourly field in the response we get from getting the weather for a city.

#### Fourth level
TO BE EXPLAINED