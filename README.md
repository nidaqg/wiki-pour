# Wiki Pour

![badge](https://img.shields.io/badge/license-MIT-orange)

## User Story

As an avid connoisseur of drinks, I want to be able to use a website to find great drink recipes and contribute to the ones I have created for others to share so we can all take advantage of crowd sourced insights.

## Description

This project aimed at creating a CMS-style wiki where users can view cocktail recipes, view information on different Spirits, search by brand, etc and create their own accounts. Once an account can been created, the user can create, edit or delete their own cocktail recipes as well. The app follows MVC paradigm in it's architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and express-session npm pakage for authentication.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [License](#license)
* [Questions](#questions)


## Installation

This app makes use of the following technologies:
1 express-handlebars
2 MySQL2
3 Sequelize
4 dotenv
5 bcrypt
6 espress-session
7 connect-session-sequelize
8 Browserify

[Click here to view the deployed app](https://wiki-pour.herokuapp.com/)

Alternatively, the repo can be downloaded and run locally. All the npm packages are provided in the package.json file and running npm i from the command line will install them all. Run 'npm start' from the command line to start server.

## Usage

When the user navigates to the wiki, they will be presented with a homepage where all cocktails will be displayed with their names, recipe creators and average user ratings. From the sidebar the user can search the wiki by one of many optins or they can click the 'Random' button to be presented with a randomly chosen cocktail.
When the user clicks on the 'get the recipe' button on any of the cocktails, they will be taken to a page that will list all ingredients, brands and spirits that go into that particular cocktail as well as the instructions. Users may also rate the recipe on this page.
When the user is signed in and clicks 'dashboard' in the navigation, they will be taken to their dashboard where all the cocktails that they have created will be displayed. From here they can edit or delete existing recipes or create a new one. 
If the user is inactive for more than 5 minute they will automatically be logged out of the website and need to log in again to access it.


## Contributing
 ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)

 Link to Contributor's Covenant:[Contributors Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) 

 
## License
![badge](https://img.shields.io/badge/license-MIT-orange)
   
Copyright (c) [2021] [Nida Ghuman, Gary Basra, Israel Molestina]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

## Questions

This app has been created collaboratively by : 

[Gary Basra](https://github.com/grider27)
[Nida Ghuman](https://github.com/nidaqg)
[Israel Molestina](https://github.com/Israel-Molestina) 


The repo for this project can be found here: https://github.com/nidaqg/wiki-pour

Heroku link for deployed project can be found at: https://wiki-pour.herokuapp.com/





