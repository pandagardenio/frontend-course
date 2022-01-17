# Javascript for the web

## Plan for today

Today we will:

>- Learn the basics of Javascript
>- Learn about the DOM
>- Understand JS events

## What's Javascript

**JS** (JavaScript) is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.

It is a programming language that is widely used in the web, and nowadays you can see it in every web platform and a lot of mobile apps that we use every day. It's been around for ages, but it has been in the last 10 years when it has exploded and has been the main factor behind the huge growth we have seen in the web in these late years.

Althoug it can be used both in the server side (like Python) and in the browser, during this course we will go over the functionalities Javascript offer in the browser to build dynamic web sites to enrich the functionalities offered by HTML and CSS.

## Just a quick recap

So far during the past 2 sessions we have learnt the basics of HTML and CSS, which allow us to show and structure data in a web browser as well as giving it styles so it is more attractive and usable to our users.

With Javascript we are going to learn a tool that allow to manipulate both HTML and CSS, as well as including a lot of different interactions to our users, from dynamically manipulating the data or the styles our user is seeing to communicating asynchronously with a server in order to fetch data and show it to our users.

## Quick example

For this example we are going to take AirBnB as an example, but you can think on the web platform that you use the most.

When we enter where we are going to go in the text input of the search form in the home of AirBnB and we get hints that autocomplete what we are typing (if we type **Ma**, we are going to get recommendations that complete those two letters like **Madrid**). Under the hood, in order to show these recommendations we have a Javascript program that is getting the value we are typing in each key stroke and making a call to AirBnB server so we get those recommendations that start with **Ma**. Then the response from the server with all the recommendations is processed and new HTML is being created and inserted below the input so we can easily select our destination. When we click or tap on any of those recommendations, the value is automatically written in the input where we were typing, making our experience much easier than having to write the whole destination ourselves.

## Code Academy

There is a small course in Code Academy to practice and consolidate what we are going to learn in this session.
Go to the following link [Learn Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
