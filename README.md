# SpaceX Schedule App               

Most up-to-date schedule of all upcoming SpaceX launches.

![app_screen](https://user-images.githubusercontent.com/10138586/107124875-3e228980-68cc-11eb-9d11-1cc39be2dd94.png)


### Link to App
[SpaceX Schedule](https://spacex-schedule-noy.herokuapp.com/)


### Tech

SpaceX schedule app uses a number of open source projects to work properly:

* React
* Next JS - For server side rendering
* React Lazyload - For lazyloading rocket list
* CSS Modules
* ESLint
* Airbnb ESLint
* SpaceX API


### Installation

Clone down this repository. You will need node and npm installed globally on your machine.

Install the dependencies and devDependencies.

```sh
$ npm install
```
Start the server

```sh
$ npm run dev
```

Build on local

```sh
$ npm run build
$ npm run start
```


### Motive

This was a 4-5 days long project built during an interview process. Project goals included using technologies learned and worked up until this point.

Originally I wanted to build an application that allowed users to pull data from the SpaceX API based on available filter, such as 'Launch year'. I started this process by using the create-next-app boilerplate, then adding react-lazyload.

At the end of the day, the technologies implemented in this project are React, Next JS, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-next-app boilerplate to minimize initial setup and invest more time in diving into other stuff. 

### Roadmap

 - Write unit tests
 - Add Night Mode
 
### Lighthouse Score
![heroku_light](https://user-images.githubusercontent.com/10138586/107124843-13d0cc00-68cc-11eb-9a10-86462239804d.png)


 




