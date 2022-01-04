# Employees Control Panel App

This is the documentation for Employees Control Panel App

## Getting Start

### 1- Run the server
To start using the application please Run the backend server on your device.
Please follow the steps at the [Employes-control-panel-server documentation](https://github.com/Mahmoud-Abdo-599/employees-control-panel-server/blob/master/README.md)

### 2- Run the Front-End project
To run the Front-End project

- clone the server repo:
```
git clone https://github.com/Mahmoud-Abdo-599/employees-control-panel
```

- Install the dependencies:
```
npm i
```

- Start the server:
```
npm start
```
### 3- Login
Please use those email and password to login:
```
Email: admin@admin.com
Password: 1234
```


## Technologies used

- **React 17.0.2**
- **Antd**
- **Sass**
- **React router dom**
- **Axios**
- **Moment**

## Technologies Usage

### 1- React 
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
And mainly we are using Function Components with React Hooks like useState and useEffect Hook.

### 2- Antd
React UI library with a set of high-quality React components,
for more informations check: [Antd](https://ant.design/)
### 3- Sass 
Mainly in the App for styling, we are using Sass,
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processor
Sass is completely compatible with all versions of CSS
Sass reduces repetition of CSS and therefore saves time

### 4- React router dom
I used react router dom to handle routes in our App.

### 5- Axios
Axios is a library that helps us make HTTP requests to external resources.

### 6- Moment
MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
## Folder Structure

```
Employees control panel

 ── src
    ├── index.js
    ├── AppRender.js
    ├── App.js
    ├── pages
    |   ├── Home
    |   ├── History
    |   └── Login
    ├── components
    |   ├── Layout
    |   ├── Fallbacks
    |   └── PageNotFound404
    ├── assets
    |   ├── images
    |   └── styles
    ├── routes
    |   ├── allRoutes
    |   └── middleware
    └── helpers
        ├── getCurrentDate
        └── httpRequester
```

## Description

### Features:

- The user can login using his email address.
- The user can input Arrive and Exit times.
- The user can input Lunch break times.
- The user can view the previous days history logs.


 