# Cryptocurrency Dashboard



## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Styled Components
- wouldnt normally use this, has some advantages

CSS Grid

React Context API
 - vs Redux?

HighCharts

CryptoCompare API
 - seems pretty good
 - and free (low traffic)

Moment : Date Manipulation

Lodash : Functional Programming
 - great w/ arrays/collections

localStorage : Save Coins

## Description
Settings Page with Intro greeting

Greeting the user on first visit, asking them to choose their favorites

Providing a default 5 coins as favorites & a complete list of all coins

Searching for coins with fuzzy search

Hovering and Selecting coins

Adding/Removing coins on the list of favorites

Disabling out chosen coins

Confirm Favorite Coin

Remembers those values for the user

Generates dashboard prices & historical data

###Dashboard

Data initializes from remembered favorites, or forwards to Settings page

Displays 5 major Cards for first 5 favorites and compact Cards for next 5

Renders a line chart for the 10 historical points on current favorite symbol

Select coins changes and re-fetch data, remembers current favorite

Select to render historical points on Date: Days Weeks Months

Display name and image of coin next to chart

Themes:
Easily configure the app’s theme to be dark or light

