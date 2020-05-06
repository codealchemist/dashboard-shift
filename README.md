# dashboard-shift

Small dashboard with two rooms with shifting turns.

![screenshot](https://cldup.com/rvpay77rBe.gif)

## Live demo

[https://dashboard-shift.netlify.app](https://dashboard-shift.netlify.app)

## Challenge

You’ve been hired to create a basic dashboard for a local daycare which displays current staff shifts. The details for the shifts are below:

- The business opens at 7 AM and closes at 5:30.
- Room 1 is for children under 5.
- Room 2 is for children over 5.
- Room 1 has two shifts which alternate days. For example, Monday, December 17th is an A day and the 18th is a B day.
- Room 2 has 4 shifts which alternate days and change throughout the day. Shift A goes from 7 AM to noon on December 17th, at which point the schedule switches to B until close. The 18th follows the same schedule but with shifts C and D.
- The shifts are color coded. Shift A is red, B is blue, C is yellow, and D is green.
  Dashboard requirements:
- The dashboard should display the current shift and should update without the page needing to be reloaded.
- Design the dashboard to be displayed on TV’s placed throughout the daycare.
- You may use any dependencies you deem applicable.

## Run

First, ensure you're using the required NodeJS version:

`nvm use`

Install all required dependencies:

`npm i`

Start the app:

`npm start`
