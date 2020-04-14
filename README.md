Jamie Vullo and Kelley Chaplain | Javascript, React, Ruby, and Rails as an API.

<img src='rubikstimetrackerlogo3,png' alt='' style='zoom:50%;'>

# TravelSaver
A web application made using the Rails framework as an API for backend and the React JavaScript libraray for frontend. 

## Table of Contents
* Description
* Technologies
* Setup
* Resources
* License

### Description
This is a single page application that allows a User to Register and keep track of their speedcubing times for all cubes used. Registration unlocks lifetime stats for each cube times have been recorded. The application also features an e-commerce store. 

### Technologies
This application utilizes the Ruby Programming language, the JavaScript language with React Library, while using several gems and dependencies(listed)
ruby '2.6.1'
* gem 'rails', '~> 6.0.0'
* gem 'sqlite3', '~> 1.4'
* gem 'puma', '~> 3.11'
* gem 'sass-rails', '~> 5'
* gem 'webpacker', '~> 4.0'
* gem 'turbolinks', '~> 5'
* gem 'jbuilder', '~> 2.7'
* gem 'redis', '~> 4.0'
* gem 'bcrypt'
* gem 'image_processing', '~> 1.2'
* gem 'bootsnap', '>= 1.4.2', require: false
* gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
* gem 'web-console', '>= 3.3.0'
* gem 'listen', '>= 3.0.5', '< 3.2'
* gem 'spring'
* gem 'spring-watcher-listen', '~> 2.0.0'
* gem 'capybara', '>= 2.15'
* gem 'selenium-webdriver'
* gem 'webdrivers'
* gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
* gem 'bootstrap'

* "axios": "^0.19.2",
* "bootstrap": "^4.4.1",
* "dotenv": "^8.2.0",
* "gsap": "^3.2.0",
* "heroku": "^7.39.0",
* "jsdom": "^16.2.0",
* "moment": "^2.24.0",
* "node-fetch": "^2.6.0",
* "react": "^16.12.0",
* "react-bootstrap": "^1.0.0-beta.16",
* "react-content-loader": "^5.0.2",
* "react-dates": "^21.8.0",
* "react-dom": "^16.12.0",
* "react-loading": "^2.0.3",
* "react-router-dom": "^5.1.2",
* "react-scripts": "3.4.0",
* "react-spring": "^8.0.27",

### Setup
* To run this web application you must clone it from git@github.com:jamievullo/rubikstime.git and git@github.com:jamievullo/RubiksTime-api.git. 
* Goto https://github.com/jamievullo/rubikstime and https://github.com/jamievullo/RubiksTime-api copy and clone into 2 seperate terminals.

### Backend setup
* On command line 1 type: 
```
git clone git@github.com:jamievullo/RubiksTime-api.git
```
* input: 
```
cd RubiksTime-api
```
* Input: 
```
bundle install
```
* input: 
```
rails db:migrate
```
* input: 
```
rails s 
```
* this will start the server on localhost:3000

* Register for the application by creating a Username.

### Frontend setup
* On command line 2 type: 
```
git clone git@github.com:jamievullo/rubikstime.git
```
* input: 
```
cd rubikstime
```
* input: 
```
npm install
```
* input: 
```
npm start 
```
* this will start the server on localhost:3001

### Sources and Resources Used
* http://learn.co
* https://rubygems.org
* https://stackoverflow.com x 2000 ;)
* https://css-tricks.com
* https://developer.mozilla.org/en-US/docs/Web/JavaScript
* https://www.w3schools.com/js/default.asp
* https://opentdb.com/api_config.php
* https://wheretheiss.at/w/developer
* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
* https://react-bootstrap.github.io/getting-started/introduction
* https://www.npmjs.com/package/react-router-dom
* https://www.npmjs.com/package/dotenv
* https://downdetector.com/status/github/
* https://www.npmjs.com/package/react-places-autocomplete
* https://react-bootstrap.github.io/components/tabs/
* https://react-bootstrap.github.io/components/forms/
* https://react-bootstrap.github.io/components/jumbotron/
* http://adphorus.github.io/react-date-range/#calendar
* https://www.npmjs.com/package/react-date-range
* https://www.react-spring.io/
* https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
* https://react-bootstrap.github.io/layout/grid/#container-props
* https://github.com/airbnb/react-dates
* https://greensock.com/ease-visualizer/
* https://www.npmjs.com/package/react-gsap
* https://repl.it/@jamievullo/help
* https://zellwk.com/blog/looping-through-js-objects/
* https://stackoverflow.com/questions/40981040/     using-a-fetch-inside-another-fetch-in-javascript
* https://www.codeply.com/go/l1KAQtjjbA
* https://stackoverflow.com/questions/30528348/setstate-inside-of-componentdidupdate
* https://www.robinwieruch.de/react-pass-props-to-component
* https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2
* https://medium.com/swlh/add-loading-animation-to-your-react-app-db3999a5c88d
* https://blog.logrocket.com/axios-or-fetch-api/
* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_zoom_hover
* https://repl.it/@jamievullo/Scrapers
* https://rubygems.org/gems/nokogiri
* https://reactstrap.github.io/components/popovers/
* https://www.canva.com/design/DAD2IqOY0a8/deK9vpF728J0fkIgArEZBw/edit?category=tACZCp5JRWg#
* https://www.figma.com
* https://reactjs.org/docs/conditional-rendering.html
* https://developer.avis.com/home?destination=/getting-started
* https://airbnb.io/react-dates/?path=/story/drp-calendar-props--default
* https://github.com/danilowoz/react-content-loader

### License
* MIT License

### Future Adjustments 
* Ad banners $$$
* Adding Auth0 to site for easier and more secure authentication
