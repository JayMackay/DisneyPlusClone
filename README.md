# Disney Plus React Clone

This is a Disney Plus Clone built with ReactJS and hosted utilizing Firebase. You can visit the website by clicking **_[HERE](https://disney-plus-clone-4fa0c.web.app)_**

To submit bug reports, feature suggestions, or track changes:
https://github.com/JayMackay/DisneyPlusClone

_Disclaimer: Please note that I do not own any rights to Disney or its partners. This platform was made soley for educational purposes and to be shown as a piece for a portfolio. There are no copyright infringements intended._

### Contents Of This File

-   Requirements
-   Features
-   Installation
-   Troubleshooting
-   Maintainers

### Requirements

This project is built using ReactJS Library Version 17.0.2 installed via Node Package Manager. The application requires the following extensions to run:

```
Node.js:
https://nodejs.org/en/download/
```

_As well as the following additional libraries:_

-   ReactJS: Base starting library execute the following command when creating you React application

```
npx create-react-app *AppName*
```

-   Redux: Used to manage state & communication with the database
-   Slick Slider: For the application movie slider component
-   Styled Components: Implement CSS styling directly within your JavaScript components
-   Firebase: Database management & hosting
    https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425

```
npm install --save redux
npm install react-slick --save
npm install --save styled-components
npm install firebase-tools -g
```

### Features

-   Login page with Google Authentication
-   Display movies populated from a Firebase database
-   Get specific movie data for each individual movie such as description
-   Additional recommended list of movies withing the details tab
-   Filter all movies depending on the producer or saga

### Installation

To install ensure you have the latest version of VS Code. Clone the project from the GitHub repository by downloading the zip file. Open the project within VS Code and open up the terminal. Ensure that you are in the main project directory before executing the following command and running the project on your local server.

```
npm start
```

### Troubleshooting

There were some issues trying to host on a seperate Firebase server as the application utilises a Firestore database from another source for external assets. Run the following commands in terminal if you are looking to redeploy and host:

1. Execute `npm run build` to rebuild the project
2. Login to Firebase using `firebase login` followed by `firebase init`
3. Select the Hosting option as well as creating a new Firebase application or choosing from an existing project
4. Type `build` for your folder of choice
5. Choose **_Yes_** for Single Page Application option
6. Select **_No_** to avoid overwriting of files for Firebase
7. Run `firebase serve --only hosting` for testing
8. Before finallly runnning `firebase deploy`

## Authors

Jared Mackay - https://github.com/JayMackay

![Disney Plus Application](https://www.corraditobias.com.ar/img/work/09/05.jpg)
