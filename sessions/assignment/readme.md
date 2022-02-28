# Group assignment

## Assignment data

### Forming the groups
This assignment is meant to be done in groups (use your regular work groups)

### Delivery
Please join this GitHub classroom. https://classroom.github.com/a/rNTBeHM4

### Due date
Please submit your assignment by Thursday the 10th of March

### Doubts
Plase submit any doubt you have using Slack or email. If you think your doubt can help others, please use the Slack group instead of private messages. I will try to answer as soon as possible.

## Assignment description
With this assignment we are going to practice everything we have learnt so far.
We are going to do a weather app.

### Assignment bootstrap app
You will be provided with the skeleton of a React app, with some already done utilities. You have a description of them in the App.js file, explaining what they day and how to use them.

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

`temperature`: Temperature in Kelvin degrees

`temperatureFeeling`: The "feels like" temperature is **a measurement of how hot or cold it really feels like outside** in Kelvin degrees

`humidity`: Humidity %

`uvi`: The UVI gives an **indication of the level of UV radiation and the potential danger of sun exposure**

![UV index](https://www.who.int/images/default-source/imported/radiation/uv-ultraviolet-index.jpg?sfvrsn=8cd288e_5)


`cloudiness`: Cloudiness %

`windSpeed`: Wind speed in m/s

`summary`: Summary of the weather


##### hourly[]
`time`: Date in miliseconds. You can use it in Javascript using new Date(time) to get a formatted date

`temperature`: Temperature in Kelvin degrees

`temperatureFeeling`: The "feels like" temperature is **a measurement of how hot or cold it really feels like outside** in Kelvin degrees

`humidity`: Humidity %

`uvi`: The UVI gives an **indication of the level of UV radiation and the potential danger of sun exposure**

![UV index](https://www.who.int/images/default-source/imported/radiation/uv-ultraviolet-index.jpg?sfvrsn=8cd288e_5)


`cloudiness`: Cloudiness %

`windSpeed`: Wind speed in m/s

`summary`: Summary of the weather


##### daily[]
The data we receive is in the same format except for **temperature** and **temperatureFeeling** keys. Instead of a number with the degrees, we receive objetcs with the following form.

```json
"temperature": {
	"day": 285.05,
	"min": 280.6,
	"max": 286.75,
	"night": 282.95,
	"eve": 285.71,
	"morn": 280.6
},
"temperatureFeeling": {
	"day": 283.76,
	"night": 281.19,
	"eve": 284.38,
	"morn": 280.6
}
```

## Assignment grading
The grade of the assignment is going to based in four different levels of complexity

### First level (5 points)
We need to make an app that calls the endpoint to get the weather for a city we choose from the available ones using fetch and shows the user the current temperature, humidity, the date (in a format similar to this February 25) and an image representing the summary of the weather

### Second level (2 points)
We are going to improve the app we made in the first level and instead of showing the temperature for the city we choose, we are going to give our user the ability to select the city.
For that, we are going to call the endpoint to get the available cities, render a series of tabs (our whatever method you think is best for the user, like a select for example) that our user is going to be able to click and when one of those tabs are clicked we are going to show the same weather data we are showing in the first part for the selected city.


#### Third level (2 points)
We are going to improve the app we made in the third level and also show the weather information in an daily format. For this, we can use the daily field in the response we get from getting the weather for a city. We want to display the weather by day for the following four days.

### Fourth level (1 point)
We are going to improve the app we made in the second level and also show the weather information in an hourly format. For this, we can use the hourly field in the response we get from getting the weather for a city. We want to display the weather by hour for the rest of the day (if right now it's 18:15 we should be showing the current weather that we were showing in the other levels and the weather by hour for 19:00, 20:00, 21:00, 22:00, 23:00, 00:00)
